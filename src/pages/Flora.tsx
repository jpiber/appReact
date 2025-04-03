import { Container, Typography, Card, CardContent, CardMedia, Box, TextField, IconButton, List, ListItem, ListItemText, Button, ButtonGroup } from '@mui/material';
import { useState } from 'react';
import ipe1 from '../images/ipeamarelo1.jpg.jpg';
import ipe2 from '../images/ipeamarelo2.jpg.jpg';
import ipe3 from '../images/ipeamarelo3.jpg.webp';
import orquidea1 from '../images/orquidea1.jpg.webp';
import orquidea2 from '../images/orquidea2.jpg.jpg';
import orquidea3 from '../images/orquidea3.jpg.webp';
import taquareira1 from '../images/taquareira1.jpg.png';
import taquareira2 from '../images/taquareira2.jpg.jpg';
import taquareira3 from '../images/taquareira3.jpg.jpg';
import anga1 from '../images/angá1.jpg.png';
import anga2 from '../images/angá2.jpg.webp';
import anga3 from '../images/angá3.jpg.webp';
import canafistula1 from '../images/canafistula1.jpg.png';
import canafistula2 from '../images/canafistula2.jpg.webp';
import canafistula3 from '../images/canafistula3.jpg.webp';
import ameixa1 from '../images/ameixa1.jpg.png';
import ameixa2 from '../images/ameixa2.jpg.jfif';
import ameixa3 from '../images/ameixa3.jpg.jpg';
import bananeira1 from '../images/bananeira1.jpg.jpg';
import bananeira2 from '../images/bananeira2.jpg.jpg';
import bananeira3 from '../images/bananeira3.jpg.jpg';
import laranjeira1 from '../images/laranjeira1.jpg.jpg';
import laranjeira2 from '../images/laranjeira2.jpg.webp';
import laranjeira3 from '../images/laranjeira3.jpg.jpg';
import jambolao1 from '../images/jambolao1.jpg.webp';
import jambolao2 from '../images/jambolao2.jpg.jpeg';
import jambolao3 from '../images/jambolao3.jpg.webp';
import abacateiro1 from '../images/abacateiro1.jpg.jpg';
import abacateiro2 from '../images/abacateiro2.jpg.jpg';
import abacateiro3 from '../images/abacateiro3.jpg.jpg';
import bergamoteira1 from '../images/bergamoteira1.jpg.jpg';
import bergamoteira2 from '../images/bergamoteira2.jpg.jpg';
import bergamoteira3 from '../images/bergamoteira3.jpg.jpg';
import pitangueira1 from '../images/pitangueira1.jpg.jpg';
import pitangueira2 from '../images/pitangueira2.jpg.jpg';
import pitangueira3 from '../images/pitangueira3.jpg.jpg';
import figueira1 from '../images/figueira1.jpg.jpg';
import figueira2 from '../images/figueira2.jpg.jpg';
import figueira3 from '../images/figueira3.jpg.jpg';
import amoreira1 from '../images/amoreira1.jpg.jpeg';
import amoreira2 from '../images/amoreira2.jpg.jpeg';
import amoreira3 from '../images/amoreira3.jpg.jpeg';
import hibisco1 from '../images/hibisco1.jpg.webp';
import hibisco2 from '../images/hibisco2.jpg.webp';
import hibisco3 from '../images/hibisco3.jpg.webp';
import caturrita1 from '../images/caturrita1.jpg.jpg';
import caturrita2 from '../images/caturrita2.jpg.jpg';
import caturrita3 from '../images/caturrita3.jpg.jpg';
import cardial1 from '../images/cardial1.jpg.jpg';
import cardial2 from '../images/cardial2.jpg.jpg';
import cardial3 from '../images/cardial3.jpg.jpg';
import joaodebarro1 from '../images/joaodebarro1.jpg.jfif';
import joaodebarro2 from '../images/joaodebarro2.jpg.jfif';
import joaodebarro3 from '../images/joaodebarro3.jpg.jfif';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import bentivi1 from '../images/bentivi1.jpg.webp';
import bentivi2 from '../images/bentivi2.jpg.webp';
import bentivi3 from '../images/bentivi3.jpg.webp';
import queroquero1 from '../images/queroquero1.jpg.jfif';
import queroquero2 from '../images/queroquero2.jpg.jfif';
import queroquero3 from '../images/queroquero3.jpg.jfif';
import pombajuriti1 from '../images/pombajuriti1.jpg.jpg';
import pombajuriti2 from '../images/pombajuriti2.jpg.jpg';
import pombajuriti3 from '../images/pombajuriti3.jpg.jpg';
import pardal1 from '../images/pardal1.jpg.jpg';
import pardal2 from '../images/pardal2.jpg.jpg';
import pardal3 from '../images/pardal3.jpg.webp';
import beijaflor1 from '../images/beijaflor1.webp';
import beijaflor2 from '../images/beijaflor2.jpg';
import beijaflor3 from '../images/beijaflor3.jpg';

const Flora = () => {
  const [busca, setBusca] = useState('');
  const [currentImageIndices, setCurrentImageIndices] = useState<{ [key: string]: number }>({});
  const [categoriaAtiva, setCategoriaAtiva] = useState<'todas' | 'plantas' | 'aves'>('todas');

  const plantas = [
    {
      nome: 'Ipê Amarelo',
      descricao: 'O Ipê Amarelo (Handroanthus chrysotrichus) é uma árvore nativa brasileira que se destaca por suas flores amarelas vibrantes. No Parque Itaimbé, estas árvores florescem durante o inverno, criando um espetáculo visual impressionante. A espécie é resistente e adapta-se bem ao clima de Santa Maria, podendo atingir até 15 metros de altura. Suas flores atraem diversos polinizadores, contribuindo para a biodiversidade local.',
      imagens: [ipe1, ipe2, ipe3],
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
      imagens: [orquidea1, orquidea2, orquidea3],
      categoria: 'Flores',
      caracteristicas: [
        'Plantas epífitas',
        'Indicadoras de qualidade ambiental',
        'Diversidade de espécies',
        'Floração sazonal'
      ]
    },
    {
      nome: 'Taquareira',
      descricao: 'A Taquareira é uma árvore nativa que se destaca por sua copa densa e folhagem perene. No Parque Itaimbé, estas árvores proporcionam sombra e abrigo para diversas espécies de aves e outros animais. Suas flores discretas mas perfumadas contribuem para a biodiversidade local.',
      imagens: [taquareira1, taquareira2, taquareira3],
      categoria: 'Árvores',
      caracteristicas: [
        'Copa densa',
        'Folhagem perene',
        'Flores perfumadas',
        'Abrigo para aves'
      ]
    },
    {
      nome: 'Angá',
      descricao: 'O Angá é uma árvore frutífera nativa que produz vagens com sementes comestíveis. No Parque Itaimbé, estas árvores são importantes para a fauna local, fornecendo alimento para aves e outros animais. Suas flores brancas e perfumadas atraem diversos polinizadores.',
      imagens: [anga1, anga2, anga3],
      categoria: 'Árvores',
      caracteristicas: [
        'Produz frutos comestíveis',
        'Flores brancas e perfumadas',
        'Atrai polinizadores',
        'Importante para fauna local'
      ]
    },
    {
      nome: 'Canafístula',
      descricao: 'A Canafístula é uma árvore ornamental que se destaca por suas flores amarelas em cachos. No Parque Itaimbé, estas árvores contribuem para a beleza paisagística e são importantes para a biodiversidade local. Sua madeira é resistente e pode ser utilizada em diversos fins.',
      imagens: [canafistula1, canafistula2, canafistula3],
      categoria: 'Árvores',
      caracteristicas: [
        'Flores amarelas em cachos',
        'Madeira resistente',
        'Valor ornamental',
        'Importante para biodiversidade'
      ]
    },
    {
      nome: 'Ameixa',
      descricao: 'A Ameixa é uma árvore frutífera que produz frutos doces e saborosos. No Parque Itaimbé, estas árvores são apreciadas tanto por sua beleza quanto por seus frutos. Suas flores brancas e rosadas são um espetáculo visual durante a primavera.',
      imagens: [ameixa1, ameixa2, ameixa3],
      categoria: 'Árvores',
      caracteristicas: [
        'Produz frutos comestíveis',
        'Flores brancas e rosadas',
        'Floração na primavera',
        'Valor ornamental e frutífero'
      ]
    },
    {
      nome: 'Bananeira',
      descricao: 'As bananeiras do Parque Itaimbé são espécies frutíferas que contribuem para a diversidade do parque. Estas plantas, com suas folhas grandes e verdes, criam áreas de sombra e umidade, beneficiando outras espécies vegetais. Suas flores e frutos são importantes para a fauna local, especialmente para aves e insetos polinizadores.',
      imagens: [bananeira1, bananeira2, bananeira3],
      categoria: 'Frutíferas',
      caracteristicas: [
        'Folhas grandes e verdes',
        'Produz frutos comestíveis',
        'Cria áreas de sombra',
        'Importante para polinizadores'
      ]
    },
    {
      nome: 'Laranjeira',
      descricao: 'A Laranjeira é uma árvore frutífera que se destaca no Parque Itaimbé por sua beleza e produção de frutos. Com suas flores brancas e perfumadas, atrai diversos polinizadores e contribui para a biodiversidade local. Os frutos, além de serem apreciados por visitantes, servem como alimento para a fauna do parque.',
      imagens: [laranjeira1, laranjeira2, laranjeira3],
      categoria: 'Frutíferas',
      caracteristicas: [
        'Flores brancas e perfumadas',
        'Produz frutos comestíveis',
        'Atrai polinizadores',
        'Importante para fauna local'
      ]
    },
    {
      nome: 'Jambolão',
      descricao: 'O Jambolão é uma árvore frutífera que se destaca no Parque Itaimbé por sua beleza e produção de frutos roxos. Com suas flores brancas e perfumadas, atrai diversos polinizadores e contribui para a biodiversidade local. Os frutos, além de serem apreciados por visitantes, servem como alimento para a fauna do parque, especialmente aves.',
      imagens: [jambolao1, jambolao2, jambolao3],
      categoria: 'Frutíferas',
      caracteristicas: [
        'Flores brancas e perfumadas',
        'Produz frutos roxos comestíveis',
        'Atrai polinizadores',
        'Importante para aves e fauna local'
      ]
    },
    {
      nome: 'Abacateiro',
      descricao: 'O Abacateiro é uma árvore frutífera que se destaca no Parque Itaimbé por sua copa densa e produção de frutos nutritivos. Com suas flores pequenas e discretas, atrai diversos polinizadores e contribui para a biodiversidade local. Os frutos, além de serem apreciados por visitantes, servem como alimento para a fauna do parque, especialmente aves e pequenos mamíferos.',
      imagens: [abacateiro1, abacateiro2, abacateiro3],
      categoria: 'Frutíferas',
      caracteristicas: [
        'Copa densa e sombreada',
        'Produz frutos nutritivos',
        'Atrai polinizadores',
        'Importante para aves e pequenos mamíferos'
      ]
    },
    {
      nome: 'Bergamoteira',
      descricao: 'A Bergamoteira é uma árvore frutífera que se destaca no Parque Itaimbé por sua beleza e produção de frutos cítricos. Com suas flores brancas e perfumadas, atrai diversos polinizadores e contribui para a biodiversidade local. Os frutos, além de serem apreciados por visitantes, servem como alimento para a fauna do parque, especialmente aves e insetos.',
      imagens: [bergamoteira1, bergamoteira2, bergamoteira3],
      categoria: 'Frutíferas',
      caracteristicas: [
        'Flores brancas e perfumadas',
        'Produz frutos cítricos',
        'Atrai polinizadores',
        'Importante para aves e insetos'
      ]
    },
    {
      nome: 'Pitangueira',
      descricao: 'A Pitangueira é uma árvore frutífera nativa que se destaca no Parque Itaimbé por sua beleza e produção de frutos saborosos. Com suas flores brancas e perfumadas, atrai diversos polinizadores e contribui para a biodiversidade local. Os frutos, além de serem apreciados por visitantes, servem como alimento para a fauna do parque, especialmente aves e pequenos mamíferos.',
      imagens: [pitangueira1, pitangueira2, pitangueira3],
      categoria: 'Frutíferas',
      caracteristicas: [
        'Flores brancas e perfumadas',
        'Produz frutos vermelhos comestíveis',
        'Atrai polinizadores',
        'Importante para aves e pequenos mamíferos'
      ]
    },
    {
      nome: 'Figueira',
      descricao: 'A Figueira é uma árvore majestosa que se destaca no Parque Itaimbé por sua copa ampla e imponente. Com suas raízes aéreas características e folhas grandes, cria um ambiente único e sombreado. Sua presença é fundamental para a biodiversidade local, fornecendo abrigo e alimento para diversas espécies de aves e outros animais.',
      imagens: [figueira1, figueira2, figueira3],
      categoria: 'Árvores',
      caracteristicas: [
        'Copa ampla e sombreada',
        'Raízes aéreas características',
        'Folhas grandes e verdes',
        'Importante para fauna local'
      ]
    },
    {
      nome: 'Amoreira',
      descricao: 'A Amoreira é uma árvore frutífera que se destaca no Parque Itaimbé por sua produção de frutos doces e nutritivos. Com suas folhas verdes e copa densa, proporciona sombra e abrigo para diversas espécies. Sua presença é importante para a biodiversidade local, fornecendo alimento para aves e outros animais.',
      imagens: [amoreira1, amoreira2, amoreira3],
      categoria: 'Frutíferas',
      caracteristicas: [
        'Produz frutos doces e nutritivos',
        'Copa densa e sombreada',
        'Folhas verdes e exuberantes',
        'Importante para fauna local'
      ]
    },
    {
      nome: 'Hibisco',
      descricao: 'O Hibisco é uma planta ornamental que se destaca no Parque Itaimbé por suas flores vibrantes e coloridas. Com suas pétalas grandes e vistosas, atrai diversos polinizadores e contribui para a biodiversidade local. Sua presença é importante para a fauna do parque, especialmente para insetos e aves.',
      imagens: [hibisco1, hibisco2, hibisco3],
      categoria: 'Flores',
      caracteristicas: [
        'Flores vibrantes e coloridas',
        'Pétalas grandes e vistosas',
        'Atrai polinizadores',
        'Importante para fauna local'
      ]
    }
  ];

  const aves = [
    {
      nome: 'Caturrita',
      descricao: 'A Caturrita é uma ave nativa da América do Sul, conhecida por sua plumagem verde vibrante e sua natureza social. No Parque Itaimbé, estas aves podem ser observadas em bandos, alimentando-se de frutos e sementes das árvores nativas.',
      imagens: [caturrita1, caturrita2, caturrita3],
      categoria: 'Aves',
      caracteristicas: [
        'Plumagem verde vibrante',
        'Comportamento social',
        'Alimentação frugívora',
        'Vive em bandos'
      ]
    },
    {
      nome: 'Cardeal',
      descricao: 'O Cardeal é uma ave conhecida por sua plumagem vermelha vibrante e seu canto melodioso. No Parque Itaimbé, estes pássaros podem ser observados em áreas abertas e bordas de mata, onde se alimentam de sementes e insetos.',
      imagens: [cardial1, cardial2, cardial3],
      categoria: 'Aves',
      caracteristicas: [
        'Plumagem vermelha vibrante',
        'Canto melodioso',
        'Alimentação onívora',
        'Prefere áreas abertas'
      ]
    },
    {
      nome: 'João-de-barro',
      descricao: 'O João-de-barro é uma ave conhecida por sua habilidade em construir ninhos de barro em formato de forno. No Parque Itaimbé, estas aves podem ser observadas construindo seus característicos ninhos em postes, árvores e estruturas. São monogâmicos e trabalham em conjunto para construir e manter seus ninhos.',
      imagens: [joaodebarro1, joaodebarro2, joaodebarro3],
      categoria: 'Aves',
      caracteristicas: [
        'Constrói ninhos de barro',
        'Comportamento monogâmico',
        'Alimentação insetívora',
        'Nidificação em estruturas elevadas'
      ]
    },
    {
      nome: 'Bentevi',
      descricao: 'O Bentevi é uma ave conhecida por seu canto característico e sua plumagem amarela e preta. No Parque Itaimbé, estes pássaros podem ser observados em áreas abertas e bordas de mata, onde se alimentam de insetos e pequenos frutos. São conhecidos por sua agilidade em voo e por sua capacidade de imitar outros pássaros.',
      imagens: [bentivi1, bentivi2, bentivi3],
      categoria: 'Aves',
      caracteristicas: [
        'Plumagem amarela e preta',
        'Canto característico',
        'Alimentação insetívora',
        'Habilidade de imitação'
      ]
    },
    {
      nome: 'Quero-quero',
      descricao: 'O Quero-quero é uma ave conhecida por seu canto característico que dá origem ao seu nome. No Parque Itaimbé, estas aves podem ser observadas em áreas abertas e gramados, onde se alimentam de insetos e pequenos invertebrados. São conhecidos por sua agressividade na defesa do território e dos filhotes.',
      imagens: [queroquero1, queroquero2, queroquero3],
      categoria: 'Aves',
      caracteristicas: [
        'Canto característico',
        'Comportamento territorial',
        'Alimentação insetívora',
        'Defesa agressiva do ninho'
      ]
    },
    {
      nome: 'Pomba Juriti',
      descricao: 'A Pomba Juriti é uma ave conhecida por sua plumagem marrom-avermelhada e seu canto suave e melancólico. No Parque Itaimbé, estas aves podem ser observadas em áreas de mata e bordas de floresta, onde se alimentam de sementes e pequenos frutos. São conhecidas por seu voo rápido e por sua capacidade de se camuflar entre a vegetação.',
      imagens: [pombajuriti1, pombajuriti2, pombajuriti3],
      categoria: 'Aves',
      caracteristicas: [
        'Plumagem marrom-avermelhada',
        'Canto suave e melancólico',
        'Alimentação granívora',
        'Habilidade de camuflagem'
      ]
    },
    {
      nome: 'Pardal',
      descricao: 'O Pardal é uma ave comum e adaptável, conhecida por sua plumagem marrom-acinzentada e seu comportamento social. No Parque Itaimbé, estes pássaros podem ser observados em grupos, alimentando-se de sementes e insetos. São conhecidos por sua capacidade de se adaptar a diferentes ambientes e por seu canto característico.',
      imagens: [pardal1, pardal2, pardal3],
      categoria: 'Aves',
      caracteristicas: [
        'Plumagem marrom-acinzentada',
        'Comportamento social',
        'Alimentação onívora',
        'Alta adaptabilidade'
      ]
    },
    {
      nome: 'Beija-flor',
      descricao: 'O Beija-flor é uma ave pequena e ágil, conhecida por sua capacidade de pairar no ar e seu bico longo e fino. No Parque Itaimbé, estes pássaros podem ser observados alimentando-se do néctar das flores, especialmente em áreas com flores coloridas. São conhecidos por sua plumagem iridescente e por seu voo rápido e preciso.',
      imagens: [beijaflor1, beijaflor2, beijaflor3],
      categoria: 'Aves',
      caracteristicas: [
        'Plumagem iridescente',
        'Voo rápido e preciso',
        'Alimentação nectarívora',
        'Capacidade de pairar no ar'
      ]
    }
  ];

  const handleNextImage = (planta: any) => {
    if (Array.isArray(planta.imagens)) {
      setCurrentImageIndices(prev => ({
        ...prev,
        [planta.nome]: ((prev[planta.nome] || 0) + 1) % planta.imagens.length
      }));
    }
  };

  const handlePrevImage = (planta: any) => {
    if (Array.isArray(planta.imagens)) {
      setCurrentImageIndices(prev => ({
        ...prev,
        [planta.nome]: ((prev[planta.nome] || 0) - 1 + planta.imagens.length) % planta.imagens.length
      }));
    }
  };

  const plantasFiltradas = plantas.filter(planta =>
    planta.nome.toLowerCase().includes(busca.toLowerCase()) ||
    planta.descricao.toLowerCase().includes(busca.toLowerCase()) ||
    planta.categoria.toLowerCase().includes(busca.toLowerCase())
  );

  const avesFiltradas = aves.filter(ave =>
    ave.nome.toLowerCase().includes(busca.toLowerCase()) ||
    ave.descricao.toLowerCase().includes(busca.toLowerCase()) ||
    ave.categoria.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Flora e Fauna do Parque
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph align="center" sx={{ mb: 4 }}>
        Conheça a diversidade de plantas e animais que compõem o ecossistema do Parque Itaimbé
      </Typography>

      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          label="Buscar"
          variant="outlined"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          sx={{ mb: 2 }}
        />
        
        <ButtonGroup variant="contained" fullWidth sx={{ mb: 3 }}>
          <Button 
            onClick={() => setCategoriaAtiva('todas')}
            sx={{ 
              flex: 1,
              bgcolor: categoriaAtiva === 'todas' ? 'primary.dark' : 'primary.main',
              '&:hover': { bgcolor: 'primary.dark' }
            }}
          >
            Todas
          </Button>
          <Button 
            onClick={() => setCategoriaAtiva('plantas')}
            sx={{ 
              flex: 1,
              bgcolor: categoriaAtiva === 'plantas' ? 'primary.dark' : 'primary.main',
              '&:hover': { bgcolor: 'primary.dark' }
            }}
          >
            Plantas
          </Button>
          <Button 
            onClick={() => setCategoriaAtiva('aves')}
            sx={{ 
              flex: 1,
              bgcolor: categoriaAtiva === 'aves' ? 'primary.dark' : 'primary.main',
              '&:hover': { bgcolor: 'primary.dark' }
            }}
          >
            Aves
          </Button>
        </ButtonGroup>
      </Box>

      {(categoriaAtiva === 'todas' || categoriaAtiva === 'plantas') && (
        <>
          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
            Plantas
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 4, mb: 6 }}>
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
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={planta.imagens[currentImageIndices[planta.nome] || 0]}
                    alt={planta.nome}
                    sx={{ objectFit: 'cover' }}
                  />
                  {planta.imagens.length > 1 && (
                    <>
                      <IconButton
                        onClick={() => handlePrevImage(planta)}
                        sx={{
                          position: 'absolute',
                          left: 8,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          bgcolor: 'rgba(255, 255, 255, 0.8)',
                          '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
                        }}
                      >
                        <ArrowBackIosNewIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => handleNextImage(planta)}
                        sx={{
                          position: 'absolute',
                          right: 8,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          bgcolor: 'rgba(255, 255, 255, 0.8)',
                          '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
                        }}
                      >
                        <ArrowForwardIosIcon />
                      </IconButton>
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 8,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          display: 'flex',
                          gap: 1,
                        }}
                      >
                        {planta.imagens.map((_, index) => (
                          <Box
                            key={index}
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              bgcolor: index === (currentImageIndices[planta.nome] || 0) ? 'primary.main' : 'rgba(255, 255, 255, 0.8)',
                            }}
                          />
                        ))}
                      </Box>
                    </>
                  )}
                </Box>
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
        </>
      )}

      {(categoriaAtiva === 'todas' || categoriaAtiva === 'aves') && (
        <>
          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
            Aves
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 4 }}>
            {avesFiltradas.map((ave) => (
              <Card
                key={ave.nome}
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
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={ave.imagens[currentImageIndices[ave.nome] || 0]}
                    alt={ave.nome}
                    sx={{ objectFit: 'cover' }}
                  />
                  {ave.imagens.length > 1 && (
                    <>
                      <IconButton
                        onClick={() => handlePrevImage(ave)}
                        sx={{
                          position: 'absolute',
                          left: 8,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          bgcolor: 'rgba(255, 255, 255, 0.8)',
                          '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
                        }}
                      >
                        <ArrowBackIosNewIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => handleNextImage(ave)}
                        sx={{
                          position: 'absolute',
                          right: 8,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          bgcolor: 'rgba(255, 255, 255, 0.8)',
                          '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
                        }}
                      >
                        <ArrowForwardIosIcon />
                      </IconButton>
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 8,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          display: 'flex',
                          gap: 1,
                        }}
                      >
                        {ave.imagens.map((_, index) => (
                          <Box
                            key={index}
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              bgcolor: index === (currentImageIndices[ave.nome] || 0) ? 'primary.main' : 'rgba(255, 255, 255, 0.8)',
                            }}
                          />
                        ))}
                      </Box>
                    </>
                  )}
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {ave.nome}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {ave.descricao}
                  </Typography>
                  <Typography variant="subtitle2" color="primary" gutterBottom>
                    {ave.categoria}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Características:
                  </Typography>
                  <List dense>
                    {ave.caracteristicas.map((caracteristica, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={caracteristica} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            ))}
          </Box>
        </>
      )}

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