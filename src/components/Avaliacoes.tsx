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

// Inicializa o cliente Supabase
const supabaseUrl = 'https://seu-projeto.supabase.co';
const supabaseKey = 'sua-chave-anon';
const supabase = createClient(supabaseUrl, supabaseKey);

interface Avaliacao {
  id: number;
  nota: number;
  comentario: string;
  data: string;
  usuario: string;
}

const Avaliacoes = () => {
  const [nota, setNota] = useState<number | null>(0);
  const [comentario, setComentario] = useState('');
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
    if (!nota || !comentario) return;

    try {
      const { data, error } = await supabase
        .from('avaliacoes')
        .insert([
          {
            nota,
            comentario,
            data: new Date().toISOString(),
            usuario: 'Anônimo', // Você pode implementar autenticação depois
          },
        ])
        .select();

      if (error) throw error;

      // Limpa o formulário e recarrega as avaliações
      setNota(0);
      setComentario('');
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
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Avaliações do Parque
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ mr: 1 }}>
          Média:
        </Typography>
        <Rating value={media} precision={0.1} readOnly />
        <Typography variant="body1" sx={{ ml: 1 }}>
          ({avaliacoes.length} avaliações)
        </Typography>
      </Box>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Deixe sua avaliação
        </Typography>
        <Stack spacing={2}>
          <Rating
            value={nota}
            onChange={(_, newValue) => setNota(newValue)}
            size="large"
          />
          <TextField
            multiline
            rows={3}
            label="Seu comentário"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={enviarAvaliacao}
            disabled={!nota || !comentario}
          >
            Enviar Avaliação
          </Button>
        </Stack>
      </Paper>

      <Stack spacing={2}>
        {avaliacoes.map((avaliacao) => (
          <Paper key={avaliacao.id} sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Rating value={avaliacao.nota} readOnly size="small" />
              <Typography variant="body2" sx={{ ml: 1 }}>
                {new Date(avaliacao.data).toLocaleDateString('pt-BR')}
              </Typography>
            </Box>
            <Typography variant="body1">{avaliacao.comentario}</Typography>
            <Typography variant="caption" color="text.secondary">
              Por: {avaliacao.usuario}
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default Avaliacoes; 