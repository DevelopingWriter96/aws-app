import * as React from 'react';
import Link from 'next/link'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { getSetData } from "../utils/api-util"

const pages = ['Sets', 'Themes', 'Years'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [fetchedSet, setFetchedSet] = React.useState({})

  const handleOpenNavMenu = (event) => {
      console.log(event.currentTarget)
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
      console.log(event.currentTarget)
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleChange = () => {
  }

  const handleSearch = async () => {
    const bricksetSet = await getSetData('70003')
    setFetchedSet(bricksetSet)
    console.log(bricksetSet);
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Tooltip title="Show Sets">
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
              <Link href="/sets">Sets</Link>
              </Button>
            </Tooltip>
          </Box>

          <Box>
            <IconButton>
              <SearchIcon onClick={handleSearch}/>
            </IconButton>
          <TextField
            size="small"
            label="Search"
            variant="outlined"
            onChange={handleChange}
            sx={{ backgroundColor: 'white', flexGrow: 2, mr: 20}} 
          /> 
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="*" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;