import { useEffect, useState } from 'react';
import { Box, Typography, Button, Paper, Stack } from '@mui/material';
import ParkIcon from '@mui/icons-material/Park';
import PetsIcon from '@mui/icons-material/Pets';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import { DeveloperLink } from './DeveloperLink';

export function InstallScreen() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setIsInstallable(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#232323',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
    >
      <Paper
        sx={{
          bgcolor: '#2c2c2c',
          borderRadius: 4,
          p: 4,
          maxWidth: 400,
          width: '100%',
          boxShadow: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" fontWeight="bold" color="#fff" gutterBottom>
          Parque Itaimbé
        </Typography>
        <Typography variant="body1" color="#ccc" mb={3}>
          Descubra a beleza natural do nosso parque diretamente no seu dispositivo
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" mb={3}>
          <Box sx={{ textAlign: 'center' }}>
            <ParkIcon sx={{ fontSize: 40, color: '#8bc34a' }} />
            <Typography color="#fff">Flora Local</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <PetsIcon sx={{ fontSize: 40, color: '#29b6f6' }} />
            <Typography color="#fff">Fauna Nativa</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <SmartphoneIcon sx={{ fontSize: 40, color: '#fff' }} />
            <Typography color="#fff">Offline</Typography>
          </Box>
        </Stack>
        {isInstallable ? (
          <Button
            variant="contained"
            sx={{
              bgcolor: '#fff',
              color: '#232323',
              fontWeight: 'bold',
              borderRadius: 8,
              py: 1.5,
              px: 4,
              fontSize: 18,
              boxShadow: 2,
              mb: 2,
              '&:hover': { bgcolor: '#f5f5f5' },
            }}
            fullWidth
            onClick={handleInstallClick}
          >
            Instalar App
          </Button>
        ) : (
          <Box sx={{ color: '#fff', mt: 2 }}>
            <Typography>Para instalar o aplicativo:</Typography>
            <Typography variant="body2" sx={{ mt: 1, textAlign: 'left' }}>
              1. Abra o menu do navegador (três pontos)<br />
              2. Selecione "Adicionar à tela inicial"<br />
              3. Clique em "Adicionar"
            </Typography>
          </Box>
        )}
      </Paper>
      <DeveloperLink />
    </Box>
  );
} 