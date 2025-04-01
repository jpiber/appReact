import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, TextField } from '@mui/material';
import { useState } from 'react';
import ipê from '../images/palmeira.jpg.webp';
import orquidea from '../images/orquidea.jpg.webp';
import bromelia from '../images/bromelia.jpg.webp';

const Flora = () => {
  const [busca, setBusca] = useState('');

  const plantas = [
    {
      nome: 'Ipê Amarelo',
      descricao: 'O Ipê Amarelo (Handroanthus chrysotrichus) é uma árvore nativa brasileira que se destaca por suas flores amarelas vibrantes. No Parque Itaimbé, estas árvores florescem durante o inverno, criando um espetáculo visual impressionante. A espécie é resistente e adapta-se bem ao clima de Santa Maria, podendo atingir até 15 metros de altura. Suas flores atraem diversos polinizadores, contribuindo para a biodiversidade local.',
      imagem: ipê,
      categoria: 'Árvores',
      caracteristicas: [
        'Floração no inverno',
        'Altura média de 15 metros',
        'Flores amarelas vibrantes',
        'Atrai polinizadores'
      ]
    },
    {
      nome: 'Orquídea',
      descricao: 'As orquídeas do Parque Itaimbé representam uma diversidade de espécies epífitas que crescem sobre as árvores. Estas plantas são especialmente importantes para o ecossistema local, pois indicam a qualidade do ar e a saúde da floresta. As orquídeas do parque incluem espécies nativas e algumas espécies cultivadas, criando um ambiente rico em biodiversidade.',
      imagem: orquidea,
      categoria: 'Flores',
      caracteristicas: [
        'Plantas epífitas',
        'Indicadoras de qualidade ambiental',
        'Diversidade de espécies',
        'Floração sazonal'
      ]
    },
    {
      nome: 'Bromélias',
      descricao: 'As bromélias são plantas fascinantes que podem ser encontradas em abundância no Parque Itaimbé. Estas plantas formam pequenos ecossistemas em suas folhas, acumulando água e servindo como habitat para diversos insetos e pequenos animais. Suas flores coloridas e folhas em roseta são características marcantes da paisagem do parque.',
      imagem: bromelia,
      categoria: 'Plantas',
      caracteristicas: [
        'Forma pequenos ecossistemas',
        'Acumula água nas folhas',
        'Habitat para insetos',
        'Flores coloridas'
      ]
    }
  ];

  const plantasFiltradas = plantas.filter(planta =>
    planta.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Flora do Parque
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph align="center" sx={{ mb: 4 }}>
        Conheça a diversidade de plantas e árvores que compõem o ecossistema do Parque Itaimbé
      </Typography>

      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          label="Buscar planta"
          variant="outlined"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Typography variant="body2" color="text.secondary" align="center">
          {plantasFiltradas.length} {plantasFiltradas.length === 1 ? 'planta encontrada' : 'plantas encontradas'}
        </Typography>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 4 }}>
        {plantasFiltradas.map((planta) => (
          <Card
            key={planta.nome}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image={planta.imagem}
              alt={planta.nome}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                {planta.nome}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {planta.descricao}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" color="primary" gutterBottom>
                  Características:
                </Typography>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  {planta.caracteristicas.map((caracteristica) => (
                    <li key={caracteristica}>
                      <Typography variant="body2">{caracteristica}</Typography>
                    </li>
                  ))}
                </ul>
              </Box>
              <Box sx={{ mt: 'auto', pt: 2 }}>
                <Typography variant="caption" color="primary">
                  Categoria: {planta.categoria}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Preservação da Flora
        </Typography>
        <Typography paragraph>
          O Parque Itaimbé mantém um importante trabalho de preservação da flora local,
          contribuindo para a manutenção da biodiversidade e do equilíbrio ecológico
          da região. A diversidade de espécies encontradas no parque é resultado de
          anos de conservação e cuidados com o ambiente natural. O parque serve como
          um importante refúgio para espécies nativas e como um laboratório vivo para
          estudos e educação ambiental.
        </Typography>
      </Box>
    </Container>
  );
};

export default Flora; 