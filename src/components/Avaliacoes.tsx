import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Rating,
  TextField,
  Button,
  Paper,
  Stack,
  CircularProgress,
} from '@mui/material';
import { createClient } from '@supabase/supabase-js';

// Inicializa o cliente Supabase com as variáveis de ambiente
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

interface Avaliacao {
  id: number;
  nota: number;
  comentario: string;
  data: string;
  usuario: string;
  nome: string;
}

const Avaliacoes = () => {
  const [nota, setNota] = useState<number | null>(0);
  const [comentario, setComentario] = useState('');
  const [nome, setNome] = useState('');
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);
  const [loading, setLoading] = useState(true);
  const [media, setMedia] = useState(0);

  useEffect(() => {
    carregarAvaliacoes();
  }, []);

  const carregarAvaliacoes = async () => {
    try {
      const { data, error } = await supabase
        .from('avaliacoes')
        .select('*')
        .order('data', { ascending: false });

      if (error) throw error;

      setAvaliacoes(data || []);
      
      // Calcula a média
      if (data && data.length > 0) {
        const soma = data.reduce((acc: number, curr: Avaliacao) => acc + curr.nota, 0);
        setMedia(soma / data.length);
      }
    } catch (error) {
      console.error('Erro ao carregar avaliações:', error);
    } finally {
      setLoading(false);
    }
  };

  const enviarAvaliacao = async () => {
    if (!nota || !comentario || !nome) return;

    try {
      const { error } = await supabase
        .from('avaliacoes')
        .insert([
          {
            nota,
            comentario,
            data: new Date().toISOString(),
            usuario: 'Anônimo',
            nome: nome.trim()
          },
        ]);

      if (error) throw error;

      // Limpa o formulário e recarrega as avaliações
      setNota(0);
      setComentario('');
      setNome('');
      carregarAvaliacoes();
    } catch (error) {
      console.error('Erro ao enviar avaliação:', error);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Avaliações do Parque
      </Typography>

      {/* Formulário de Avaliação */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Deixe sua Avaliação
        </Typography>
        <Stack spacing={2}>
          <TextField
            label="Seu Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            fullWidth
          />
          <Box>
            <Typography component="legend">Nota</Typography>
            <Rating
              value={nota}
              onChange={(_, newValue) => setNota(newValue)}
              precision={0.5}
            />
          </Box>
          <TextField
            label="Comentário"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            multiline
            rows={4}
            required
            fullWidth
          />
          <Button
            variant="contained"
            onClick={enviarAvaliacao}
            disabled={!nota || !comentario || !nome}
          >
            Enviar Avaliação
          </Button>
        </Stack>
      </Paper>

      {/* Média das Avaliações */}
      <Paper sx={{ p: 2, mb: 4, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Média das Avaliações
        </Typography>
        <Rating value={media} precision={0.5} readOnly />
        <Typography variant="body1" sx={{ mt: 1 }}>
          {media.toFixed(1)} / 5.0
        </Typography>
      </Paper>

      {/* Lista de Avaliações */}
      <Typography variant="h5" gutterBottom>
        Avaliações Recentes
      </Typography>
      <Stack spacing={2}>
        {avaliacoes.map((avaliacao) => (
          <Paper key={avaliacao.id} sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                {avaliacao.nome}
              </Typography>
              <Rating value={avaliacao.nota} readOnly size="small" />
            </Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {new Date(avaliacao.data).toLocaleDateString('pt-BR')}
            </Typography>
            <Typography variant="body1">
              {avaliacao.comentario}
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default Avaliacoes; 