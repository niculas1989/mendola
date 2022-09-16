import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { url } from 'inspector';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Home: NextPage = () => {

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Box sx={{ display: 'flex'}}>
          <LocalDiningIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            >
            Dottor Cesare Gabriele Mendola
          </Typography>
          </Box>

            <Box sx={{ display: 'flex'}}>
          <LocalDiningIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            >
            Dr. Mendola
          </Typography>
            </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://scontent-fco2-1.xx.fbcdn.net/v/t31.18172-8/23737841_10214960763914482_7502499783616706913_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=G2Zz7MtesvYAX_2UsDn&_nc_ht=scontent-fco2-1.xx&oh=00_AT8RoeKJiD9lFkc-vICgki85_vYyYenuU4M7WcE6V-dUGw&oe=634A662F" sx={{ height: '100px', width: '100px'}}/>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

      <Box sx={{ display: 'flex', justifyContent: 'center', m: 7}}>
      <Box sx={{ height: '400px', width: '80%', backgroundImage: "url('https://www.naturhouse.it/media/amasty/blog/piramide-alimentare.png')", backgroundPosition: 'center', backgroundSize: 'contain'}}>
      </Box>
      </Box>

      <Box sx={{ pl: 4}}>
        <h2>Percorsi dietoterapici personalizzati per il trattamento di:</h2>
        <ul>
          <li>
            Sovrappeso e Obesità
          </li>
          <li>
            Sindrome metabolica
          </li>
          <li>
            Sindrome dell'ovaio policistico
          </li>
          <li>
            Cardiopatie e ipertensione
          </li>
          <li>
            Alimentazione in gravidanza e/o allattamento
          </li>
          <li>
            Alimentazione nello sportivo
          </li>
          <li>
            Diabete
          </li>
          <li>
            Celiachia e intolleranze alimentari
          </li>
          <li>
            Sindrome del colon irritabile
          </li>
          <li>
            Morbo di Crohn e Rettocolite Ulcerosa
          </li>
          <li>
            Alimentazione nell'anziano
          </li>
        </ul>
      </Box>

      <Box sx={{textAlign: 'center'}}>
            <h2>Contatti:</h2>
            <Box sx={{p: 3}}>
            <strong>Cellulare:</strong> 3271791486
            </Box>
        <Box sx={{ p: 3 }}>
            <strong>Email:</strong> cesare.dietista@gmail.com
            </Box>
            <hr />
            <Box sx={{ pt: 2}}>
              <h3>Nutrizione clinica e sportiva</h3>
            </Box>
      </Box>
    </>
  )
}

export default Home

