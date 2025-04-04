import { Container, Typography, Box, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';

const Preservacao = () => {
  const dicas = [
    {
      titulo: 'Reduza o consumo de água',
      icone: '💧',
      descricao: 'Feche a torneira ao escovar os dentes, tome banhos mais curtos e conserte vazamentos. Cada gota conta!',
      acoes: [
        'Instale redutores de vazão em torneiras',
        'Reutilize a água da máquina de lavar para limpeza',
        'Colete água da chuva para regar plantas',
        'Use a descarga com moderação'
      ]
    },
    {
      titulo: 'Economize energia',
      icone: '⚡',
      descricao: 'Desligue aparelhos quando não estiver usando, troque lâmpadas por LED e aproveite a luz natural.',
      acoes: [
        'Desligue a TV e computador quando não estiver usando',
        'Troque lâmpadas incandescentes por LED',
        'Use a luz natural durante o dia',
        'Instale painéis solares se possível'
      ]
    },
    {
      titulo: 'Reduza o uso de plásticos',
      icone: '♻️',
      descricao: 'Evite produtos com excesso de embalagens, use sacolas reutilizáveis e recuse canudos plásticos.',
      acoes: [
        'Use sacolas de tecido para compras',
        'Compre produtos a granel',
        'Use garrafas e copos reutilizáveis',
        'Recuse canudos e talheres descartáveis'
      ]
    },
    {
      titulo: 'Transporte sustentável',
      icone: '🚲',
      descricao: 'Prefira caminhar, usar bicicleta ou transporte público. Reduza o uso de carros particulares.',
      acoes: [
        'Use bicicleta para trajetos curtos',
        'Caminhe quando possível',
        'Use transporte público',
        'Compartilhe caronas com colegas'
      ]
    },
    {
      titulo: 'Plante árvores',
      icone: '🌳',
      descricao: 'Árvores absorvem CO2, produzem oxigênio e ajudam a regular a temperatura. Plante uma árvore!',
      acoes: [
        'Participe de mutirões de plantio',
        'Plante árvores nativas em seu quintal',
        'Cuide de árvores já existentes',
        'Eduque crianças sobre a importância das árvores'
      ]
    },
    {
      titulo: 'Proteja a vida selvagem',
      icone: '🦋',
      descricao: 'Respeite os animais e seus habitats. Não alimente animais selvagens e mantenha distância.',
      acoes: [
        'Não capture animais selvagens',
        'Mantenha gatos dentro de casa para proteger pássaros',
        'Denuncie maus-tratos a animais',
        'Apoie organizações de proteção animal'
      ]
    },
    {
      titulo: 'Coma de forma sustentável',
      icone: '🥗',
      descricao: 'Reduza o consumo de carne, compre produtos locais e evite desperdício de alimentos.',
      acoes: [
        'Planeje suas refeições para evitar desperdício',
        'Compre produtos da estação',
        'Reduza o consumo de carne',
        'Composte restos de alimentos'
      ]
    },
    {
      titulo: 'Consumo consciente',
      icone: '🛍️',
      descricao: 'Compre apenas o necessário, escolha produtos duráveis e repare em vez de substituir.',
      acoes: [
        'Evite compras por impulso',
        'Prefira produtos duráveis',
        'Repare itens em vez de descartar',
        'Compre de empresas com práticas sustentáveis'
      ]
    },
    {
      titulo: 'Recicle e reutilize',
      icone: '🔄',
      descricao: 'Separe o lixo corretamente, recicle e dê nova vida a objetos que seriam descartados.',
      acoes: [
        'Separe papel, plástico, vidro e metal',
        'Recicle eletrônicos em pontos de coleta',
        'Doe roupas e objetos em bom estado',
        'Transforme materiais em arte ou decoração'
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h1" sx={{ fontSize: '3rem', mb: 2 }}>
          🌿
        </Typography>
        <Typography variant="h3" component="h1" gutterBottom>
          Preservação Ambiental
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Pequenas ações, grandes impactos para o futuro do nosso planeta
        </Typography>
      </Box>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        A preservação do meio ambiente é essencial para garantir um futuro sustentável para as próximas gerações. 
        Cada pequena ação conta e, juntos, podemos fazer a diferença. Abaixo, você encontrará dicas práticas e 
        ações que podem ser incorporadas ao seu dia a dia para ajudar a proteger nosso planeta.
      </Typography>

      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
        gap: 4,
        mb: 4
      }}>
        {dicas.map((dica, index) => (
          <Card key={index} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="h2" sx={{ fontSize: '2rem', mr: 2 }}>
                  {dica.icone}
                </Typography>
                <Typography variant="h6" component="h2">
                  {dica.titulo}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" paragraph>
                {dica.descricao}
              </Typography>
              <List dense>
                {dica.acoes.map((acao, idx) => (
                  <ListItem key={idx}>
                    <ListItemText primary={acao} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Preservacao; 