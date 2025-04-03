import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: '🌿',
      title: 'Flora',
      description: 'Conheça a diversidade de plantas e árvores do parque',
      path: '/flora',
    },
    {
      icon: '📚',
      title: 'História',
      description: 'A história e importância do Parque Itaimbé',
      path: '/historia',
    },
    {
      icon: '⭐',
      title: 'Avaliações',
      description: 'Veja o que os visitantes dizem sobre o parque',
      path: '/avaliacoes',
    },
    {
      icon: 'ℹ️',
      title: 'Sobre',
      description: 'Informações detalhadas sobre o parque e suas características',
      path: '/sobre',
    },
    {
      icon: '📧',
      title: 'Contato',
      description: 'Informações e formas de contato',
      path: '/contato',
    },
    {
      icon: '🌍',
      title: 'Preservação Ambiental',
      description: 'Saiba como preservar o meio ambiente',
      path: '/preservacao',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h1" sx={{ fontSize: '3rem', mb: 2 }}>
          🌳
        </Typography>
        <Typography variant="h3" component="h1" gutterBottom>
          Parque Itaimbé
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Um refúgio natural no coração de Santa Maria
        </Typography>
      </Box>

      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
        gap: 4,
        mb: 6
      }}>
        {features.map((feature) => (
          <Card
            key={feature.title}
            component={RouterLink}
            to={feature.path}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s',
              textDecoration: 'none',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h2" sx={{ fontSize: '2.5rem', mb: 2, color: 'primary.main' }}>
                {feature.icon}
              </Typography>
              <Typography variant="h5" component="h2" gutterBottom>
                {feature.title}
              </Typography>
              <Typography color="text.secondary">
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Sobre o Parque
        </Typography>
        <Typography paragraph>
          O Parque Itaimbé é um importante espaço verde localizado em Santa Maria, Rio Grande do Sul.
          Este parque urbano oferece uma oportunidade única para os moradores e visitantes
          desfrutarem da natureza e do lazer ao ar livre. 🌿
        </Typography>
      </Box>
    </Container>
  );
};

export default Home; 