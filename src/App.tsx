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
import { InstallScreen } from './components/InstallScreen';

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
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/flora" element={<Flora />} />
              <Route path="/historia" element={<Historia />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/avaliacoes" element={<Avaliacoes />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
