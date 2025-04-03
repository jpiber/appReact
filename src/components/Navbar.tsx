import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
import parkIcon from '../images/Park-icon.webp';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem
          key={item.text}
          component={RouterLink}
          to={item.path}
          onClick={handleDrawerToggle}
          sx={{
            color: 'black',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.1)',
            },
            '& .MuiListItemText-primary': {
              color: 'black',
            }
          }}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  ); 

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
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
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              PaperProps={{
                sx: {
                  bgcolor: '#2E7D32',
                }
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={RouterLink}
                to={item.path}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 