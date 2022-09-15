import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <span className='logo'>the logo name</span>
        </div>
        <hr />
        <div className='center'>
            <ul>
                <p className="title">Main</p>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <li>
                <SupervisedUserCircleIcon className="icon"/>
                    <span>User <br /> Management</span>
                </li>
                <li>
                <TranslateOutlinedIcon className="icon"/>
                    <span>Language <br /> Management</span>
                </li>
                <li>
                <SupervisedUserCircleIcon className="icon"/>
                    <span>User <br /> Management</span>
                </li>
            </ul>
        </div>
        <div className='bottom'> 
        <ul className='classul'>
            <li>
                <FiberManualRecordIcon className='doticon'/> <span>Terms & Condition</span>
            </li>
            <li>
            <FiberManualRecordIcon className='doticon'/>  <span>Privacy Policy</span>
            </li>
            <li>
            <FiberManualRecordIcon className='doticon'/> <span>Support</span>
            </li>
        </ul>
        </div>

    </div>
  )
}

export default Sidebar