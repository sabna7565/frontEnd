import './home.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Widget from '../../components/widgets/Widget';
import WidgetTwo from '../../components/widgets/WidgetTwo';
import WidgetThree from '../../components/widgets/WidgetThree';

const Home = () => {
	return (
        <>
            <div className='widgets'>
                <Widget/>
                <Widget/>
            </div>
            <div className='widgets'>
                <WidgetTwo/>
                <WidgetThree/>
            </div>
            </>
	);
};

export default Home;
