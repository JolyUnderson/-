import * as React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Menu from '../Menu/menu';
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
function MyApp({children}) {


  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const [isOpen,setOpen]=React.useState(false);
    return (
      <Box
        sx={{
          display: 'flot-root',
          width: 'auto',
          height: '100%',
          alignItems: 'left',
          justifyContent: 'left',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 2,
        }}
      >
        <AppBar position="static">
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 3 }}
            onClick={()=>setOpen(!isOpen)}

          >
            <MenuIcon ></MenuIcon>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Главное меню
          </Typography>
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <AppleIcon /> : <AndroidIcon />}
        </IconButton>
        </Toolbar>
      </AppBar>
      {isOpen ? (
          <Menu isOper={isOpen} >
            <li><Link to={'/'}>Главная</Link></li>
            <li><Link to={'/meinfo'}>О себе</Link></li>
            </Menu>):null}
      <div className='about'>{children}</div>
      </Box>
    );
  }


export default function Header({children}){
    const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp>{children}</MyApp>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

