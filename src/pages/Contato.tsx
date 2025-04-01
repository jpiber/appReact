import { Container, Typography, Box, Paper, Link } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Contato = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Contato
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph align="center" sx={{ mb: 4 }}>
        Entre em contato conosco e saiba mais sobre o Parque Itaimbé
      </Typography>

      <Box sx={{ maxWidth: 600, mx: 'auto' }}>
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Informações de Contato
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <LocationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography>
              Av. Principal, 1234 - Centro, Santa Maria - RS
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <PhoneIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography>
              (55) 3222-1234
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <EmailIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography>
              contato@parqueitaimbe.com.br
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AccessTimeIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography>
              Segunda a Domingo: 8h às 18h
            </Typography>
          </Box>
        </Paper>

        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Redes Sociais
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="#" color="primary" underline="hover">
              Facebook
            </Link>
            <Link href="#" color="primary" underline="hover">
              Instagram
            </Link>
            <Link href="#" color="primary" underline="hover">
              WhatsApp
            </Link>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Contato; 