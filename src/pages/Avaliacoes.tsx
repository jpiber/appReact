import { Container, Typography } from '@mui/material';
import AvaliacoesComponent from '../components/Avaliacoes';

const Avaliacoes = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Avaliações do Parque Itaimbé
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        Compartilhe sua experiência e veja o que outros visitantes dizem sobre o parque
      </Typography>
      <AvaliacoesComponent />
    </Container>
  );
};

export default Avaliacoes; 