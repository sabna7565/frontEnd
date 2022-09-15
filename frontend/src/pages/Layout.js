import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import CardButtons from '../components/Navbar/CardButtons';
import { Grid } from '@mui/material';


const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: '#F9F9F9',
	'&:hover': {
		backgroundColor: '#F9F9F9',
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	border: '#000000',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'primary',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}));

const drawerWidth = 240;

function ResponsiveDrawer({children},props) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const isMenuOpen = Boolean(anchorEl);

	const menuId = 'primary-search-account-menu';
	const handleProfileMenuOpen = event => {
		setAnchorEl(event.currentTarget);
	};
	const mobileMenuId = 'primary-search-account-menu-mobile';

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	const handleMobileMenuOpen = event => {
		setMobileMoreAnchorEl(event.currentTarget);
	};
    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
      };
    
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };



  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
            <NotificationsIcon />
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

	const drawer = (
		<div>
			<Toolbar />
			<Divider style={{marginTop:35 }}/>
			<List>
				
					<ListItem  disablePadding>
						<ListItemButton>
							<ListItemIcon>
							<DashboardIcon style={{ color: '#8554e8' }}/>
							</ListItemIcon>
							<ListItemText primary="Dash Board" />
						</ListItemButton>
					</ListItem>

                    <ListItem  disablePadding>
						<ListItemButton>
							<ListItemIcon>
							<SupervisedUserCircleIcon style={{ color: '#8554e8' }}/>
							</ListItemIcon>
							<ListItemText primary="User Management" />
						</ListItemButton>
					</ListItem>
                    <ListItem  disablePadding>
						<ListItemButton>
							<ListItemIcon>
							<TranslateOutlinedIcon style={{ color: '#8554e8' }}/>
							</ListItemIcon>
							<ListItemText primary="Chapter Management" />
						</ListItemButton>
					</ListItem>
		
			</List>
			<Divider />
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				style={{ background: '#EFECFF',height: '100px' }}
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton
						color="primary"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon style={{color: '#8554e8' }} />
					</IconButton>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ display: { xs: 'none', sm: 'block' } }}
                        style={{ color: '#8d74e5',fontSize: '28px',fontWeight: 'bold' }}
					>
					Admin Panel 
                    <Typography
                    sx={{textAlign: 'center',color: '#000000'}}>
                    Welcome User
                    </Typography>
					</Typography>
					<Search>
						<SearchIconWrapper>
							<SearchIcon style={{ color: '#8554e8' }} />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search…"
							inputProps={{ 'aria-label': 'search' }}
						/>
					</Search>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<IconButton
							size="large"
							aria-label="show 17 new notifications"
							color="inherit"
						>
							<NotificationsIcon style={{ color: '#8554e8' }} />
						</IconButton>
						<IconButton
							size="large"
							edge="end"
							aria-label="account of current user"
							aria-controls={menuId}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="inherit"
						>
							<AccountCircle style={{ color: '#8554e8' }} />
						</IconButton>
					</Box>
					<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"
						>
							<MoreIcon style={{ color: '#8554e8' }}/>
						</IconButton>
					</Box>
					{/* <Box
					sx={{display: 'flex',
					alignItems: 'flex-start',
					flexDirection: 'row',
					p: 1,
					m: 1,
					bgcolor: 'background.paper',
					}}>
					<CardButtons/>
					</Box> */}
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 },}}
				aria-label="mailbox folders"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
                        height:"500px",
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 6,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					background:"#EFECFF",
					height:"100vh"
				}}
			>
				<Toolbar />
				{children}
			
			</Box>
            {renderMobileMenu}
		</Box>
	);
}

ResponsiveDrawer.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default ResponsiveDrawer;
