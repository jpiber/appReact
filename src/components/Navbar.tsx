import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import parkIcon from '../images/Park-icon.webp';
import { styled } from '@mui/material/styles';

const DeveloperCredit = styled('a')(({ theme }) => ({
  position: 'fixed',
  bottom: 10,
  right: 10,
  fontSize: '0.8rem',
  opacity: 0.7,
  color: '#FFFFFF',
  textDecoration: 'none',
  transition: 'opacity 0.3s ease',
  zIndex: 1000,
  background: 'rgba(0, 0, 0, 0.2)',
  padding: '4px 8px',
  borderRadius: '4px',
  backdropFilter: 'blur(2px)',
  pointerEvents: 'auto',
  '&:hover': {
    opacity: 1,
    background: 'rgba(0, 0, 0, 0.3)',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.7rem',
    padding: '3px 6px',
  },
}));

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: 'Início', path: '/' },
    { text: 'Flora', path: '/flora' },
    { text: 'História', path: '/historia' },
    { text: 'Sobre', path: '/sobre' },
    { text: 'Avaliações', path: '/avaliacoes' },
    { text: 'Contato', path: '/contato' },
    { text: 'Preservação', path: '/preservacao' },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleHome = () => {
    navigate('/');
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem
          key={item.text}
          component="div"
          onClick={() => {
            navigate(item.path);
            handleDrawerToggle();
          }}
          sx={{
            color: 'black',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.1)',
            },
            '& .MuiListItemText-primary': {
              color: 'black',
            },
          }}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  ); 

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: '#2E7D32' }}>
        <Toolbar>
          {location.pathname !== '/' && (
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleBack}
              sx={{ mr: 2 }}
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              flexGrow: 1,
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8
              }
            }}
            onClick={handleHome}
          >
            <img 
              src={parkIcon}
              alt="Ícone do Parque" 
              style={{ 
                width: '32px', 
                height: '32px', 
                marginRight: '8px' 
              }} 
            />
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ fontWeight: 'bold' }}
            >
              Parque Itaimbé
            </Typography>
          </Box>

          {isMobile ? ( 
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  onClick={() => navigate(item.path)}
                  sx={{
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            bgcolor: '#2E7D32',
            color: 'black'
          }
        }}
      >
        {drawer}
      </Drawer>
      <DeveloperCredit 
        href="https://instagram.com/jean_piber" 
        target="_blank"
      >
        desenvolvedor: @jean_piber
      </DeveloperCredit>
    </>
  );
};

export default Navbar; 