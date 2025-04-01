import { Container, Typography, Box, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Contato = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Contato
      </Typography>

      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gap: 4
      }}>
        <Paper sx={{ p: 3, height: '100%' }}>
          <Typography variant="h6" gutterBottom>
            Informações de Contato
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <LocationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography>
              Av. Presidente Vargas, 1234 - Centro, Santa Maria - RS
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <PhoneIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography>(55) 3222-1234</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <EmailIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography>contato@parqueitaimbe.com.br</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AccessTimeIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography>Segunda a Domingo: 6h às 22h</Typography>
          </Box>
        </Paper>

        <Paper sx={{ p: 3, height: '100%' }}>
          <Typography variant="h6" gutterBottom>
            Horário de Funcionamento
          </Typography>
          <Typography paragraph>
            O Parque Itaimbé está aberto todos os dias da semana, das 6h às 22h.
            Durante os finais de semana e feriados, o parque recebe um número maior
            de visitantes, especialmente durante a manhã e o final da tarde.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Como Chegar
          </Typography>
          <Typography paragraph>
            O parque está localizado no centro da cidade, com fácil acesso através
            de várias linhas de ônibus e estacionamento disponível nas proximidades.
            Para quem vem de carro, há vagas de estacionamento nas ruas adjacentes
            e um estacionamento público a 200 metros do parque.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Contato; 