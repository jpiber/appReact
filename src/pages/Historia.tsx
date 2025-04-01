import { Container, Typography, Box, Paper } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Historia = () => {
  const eventos = [
    {
      ano: '1970',
      titulo: 'Origem do Parque',
      descricao: 'O Parque Itaimbé foi criado como uma iniciativa para preservar a área verde e oferecer um espaço de lazer para a comunidade.',
    },
    {
      ano: '1980',
      titulo: 'Primeira Expansão',
      descricao: 'O parque passou por sua primeira expansão, aumentando significativamente sua área e diversidade de espécies.',
    },
    {
      ano: '1990',
      titulo: 'Reconhecimento Municipal',
      descricao: 'O parque foi reconhecido como uma importante área de preservação ambiental pelo município.',
    },
    {
      ano: '2000',
      titulo: 'Programas de Educação Ambiental',
      descricao: 'Início dos programas de educação ambiental para escolas e visitantes.',
    },
    {
      ano: '2010',
      titulo: 'Modernização',
      descricao: 'Implementação de novas estruturas e melhorias na infraestrutura do parque.',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        História do Parque
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph align="center" sx={{ mb: 4 }}>
        Conheça a trajetória e a importância do Parque Itaimbé para Santa Maria
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="body1" paragraph>
          O Parque Itaimbé é um importante marco na história de Santa Maria, representando
          não apenas um espaço de lazer e preservação ambiental, mas também um símbolo
          do compromisso da cidade com a sustentabilidade e o bem-estar de seus habitantes.
        </Typography>
      </Paper>

      <Timeline position="alternate">
        {eventos.map((evento, index) => (
          <TimelineItem key={evento.ano}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index < eventos.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  {evento.ano}
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {evento.titulo}
                </Typography>
                <Typography variant="body2">
                  {evento.descricao}
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Importância Histórica
        </Typography>
        <Typography paragraph>
          O Parque Itaimbé tem sido fundamental para a preservação da história natural
          da região, servindo como um importante refúgio para espécies nativas e como
          um espaço de educação ambiental para gerações de santa-marienses. Sua existência
          e desenvolvimento refletem a evolução da consciência ambiental na cidade e
          o compromisso com a preservação do patrimônio natural.
        </Typography>
      </Box>
    </Container>
  );
};

export default Historia; 