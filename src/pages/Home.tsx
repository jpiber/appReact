import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import ParkIcon from '@mui/icons-material/Park';
import NatureIcon from '@mui/icons-material/Nature';
import HistoryIcon from '@mui/icons-material/History';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: <NatureIcon sx={{ fontSize: 40 }} />,
      title: 'Flora',
      description: 'Conheça a diversidade de plantas e árvores do parque',
      path: '/flora',
    },
    {
      icon: <HistoryIcon sx={{ fontSize: 40 }} />,
      title: 'História',
      description: 'A história e importância do Parque Itaimbé',
      path: '/historia',
    },
    {
      icon: <ContactMailIcon sx={{ fontSize: 40 }} />,
      title: 'Contato',
      description: 'Informações e formas de contato',
      path: '/contato',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <ParkIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
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
              <Box sx={{ color: 'primary.main', mb: 2 }}>
                {feature.icon}
              </Box>
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
          se conectarem com a natureza, praticarem atividades físicas e apreciarem a
          biodiversidade local.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home; 