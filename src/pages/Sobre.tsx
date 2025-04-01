import { Container, Typography, Box, Paper } from '@mui/material';

const Sobre = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Sobre o Parque Itaimbé
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            História da Construção
          </Typography>
          <Typography paragraph>
            O Parque Itaimbé foi construído durante a administração de Osvaldo Nascimento da Silva (1977-1982), 
            viabilizado pelo programa Comunidade Urbana para Recuperação Acelerada (Cura). A construção do parque 
            representa um marco importante na história de Santa Maria, embora tenha enfrentado diversos desafios 
            durante sua implementação.
          </Typography>
          <Typography paragraph>
            O processo de construção e manutenção do parque envolveu algumas dificuldades, incluindo:
          </Typography>
          <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
            <li>Reduzida participação popular no processo de planejamento</li>
            <li>Alterações indevidas do projeto original</li>
            <li>Gestão equivocada do espaço</li>
          </Typography>
          <Typography paragraph>
            Estes fatores impactaram diretamente na relação da população com o espaço, dificultando a criação 
            de vínculos e a valorização do parque como área de lazer, recreação e convivência social. Para superar 
            estes desafios, é fundamental criar novas funções para a área, adaptadas às exigências contemporâneas, 
            e evitar que os erros históricos sejam repetidos no planejamento e execução de novos parques na cidade.
          </Typography>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Localização e Acesso
          </Typography>
          <Typography paragraph>
            O Parque Itaimbé está localizado no coração de Santa Maria, Rio Grande do Sul,
            oferecendo fácil acesso para moradores e visitantes. O parque está situado em
            uma área privilegiada, cercada por residências e próximo a importantes vias
            de circulação da cidade.
          </Typography>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Estrutura e Infraestrutura
          </Typography>
          <Typography paragraph>
            O parque dispõe de uma infraestrutura completa para atender seus visitantes,
            incluindo:
          </Typography>
          <Typography component="ul" sx={{ pl: 3 }}>
            <li>Trilhas para caminhada e corrida</li>
            <li>Áreas de lazer e descanso</li>
            <li>Espaços para prática de exercícios</li>
            <li>Iluminação adequada</li>
            <li>Banheiros públicos</li>
            <li>Estacionamento</li>
          </Typography>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Horário de Funcionamento
          </Typography>
          <Typography paragraph>
            O parque está aberto diariamente, das 6h às 22h, permitindo que os visitantes
            aproveitem o espaço em diferentes horários do dia. A iluminação noturna
            garante a segurança e o conforto dos frequentadores.
          </Typography>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Atividades e Eventos
          </Typography>
          <Typography paragraph>
            O Parque Itaimbé é palco de diversas atividades e eventos ao longo do ano,
            incluindo:
          </Typography>
          <Typography component="ul" sx={{ pl: 3 }}>
            <li>Práticas esportivas</li>
            <li>Eventos culturais</li>
            <li>Atividades educativas</li>
            <li>Feiras e exposições</li>
            <li>Encontros comunitários</li>
          </Typography>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Compromisso Ambiental
          </Typography>
          <Typography paragraph>
            O parque mantém um compromisso constante com a preservação ambiental,
            implementando práticas sustentáveis e programas de educação ambiental.
            A gestão do parque trabalha em parceria com a comunidade para garantir
            a conservação deste importante espaço verde urbano.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Sobre; 