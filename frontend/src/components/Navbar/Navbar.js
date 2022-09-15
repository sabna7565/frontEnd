import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import CardButtons from './CardButtons';



const Navbar = () => {
	return (
        <>
        <div className="navbar">
		<div className="wrapper">
           <div className="heading">
            <span>Admin Panel</span>
            <p>User Management</p>
           </div>
			<div className="search">
				<input type="text" placeholder="Search..." />
				<SearchOutlinedIcon style={{color:'#704bf3'}}/>
			</div>
			<div className="items">
                <div className="item">
                 <AccountCircleRoundedIcon className="icon"/>
                </div>
                <div className="item">
                 <NotificationsRoundedIcon className="icon"/>
                </div>
            </div>
		</div>
        </div>
        <CardButtons/>
        </>
	);
};

export default Navbar;
