import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Flora from './pages/Flora';
import Historia from './pages/Historia';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import Avaliacoes from './pages/Avaliacoes';
import Preservacao from './pages/Preservacao';
import { InstallScreen } from './components/InstallScreen';
import { DeveloperLink } from './components/DeveloperLink';

// Declaração de tipo para a propriedade standalone
declare global {
  interface Navigator {
    standalone?: boolean;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E7D32',
    },
    secondary: {
      main: '#81C784',
    },
    background: {
      default: '#F5F5F5',
    },
  },
});

function App() {
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Verifica se o app está instalado
    const checkInstallation = () => {
      // Verifica se está rodando no modo standalone
      if (window.matchMedia('(display-mode: standalone)').matches) {
        setIsInstalled(true);
        return;
      }

      // Verifica se está rodando no iOS
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
      if (isIOS) {
        setIsInstalled(true);
        return;
      }

      // Verifica se está rodando no Android como PWA
      if (window.navigator.standalone === true) {
        setIsInstalled(true);
        return;
      }

      // Verifica se está rodando no Chrome como PWA
      if (window.matchMedia('(display-mode: standalone)').matches || 
          window.matchMedia('(display-mode: window-controls-overlay)').matches) {
        setIsInstalled(true);
        return;
      }
    };

    // Verifica inicialmente
    checkInstallation();

    // Adiciona listener para mudanças no modo de exibição
    const mediaQuery = window.matchMedia('(display-mode: standalone)');
    mediaQuery.addEventListener('change', checkInstallation);

    return () => {
      mediaQuery.removeEventListener('change', checkInstallation);
    };
  }, []);

  if (!isInstalled) {
    return <InstallScreen />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh',
          position: 'relative'
        }}>
          <Navbar />
          <main style={{ 
            flex: 1,
            padding: '20px',
            marginTop: '64px' // Altura da AppBar
          }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/flora" element={<Flora />} />
              <Route path="/historia" element={<Historia />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/avaliacoes" element={<Avaliacoes />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/preservacao" element={<Preservacao />} />
            </Routes>
          </main>
          <DeveloperLink />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
