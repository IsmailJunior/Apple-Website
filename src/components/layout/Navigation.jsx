import {LogoApple,BagOutline, SearchOutline} from 'react-ionicons'
import classes from './Navigation.module.css';
import NavLink from './NavLink';
const Navigation = () =>
{
	return (
		<ul className={classes.container}>
			<NavLink link='/' title={ <LogoApple color='#d5d5d5'/>} />
			<NavLink title='Store'/>
			<NavLink title='Mac'/>
			<NavLink title='iPad'/>
			<NavLink title='iPhone'/>
			<NavLink title='Watch'/>
			<NavLink title='AirPods'/>
			<NavLink title='TV & Home'/>
			<NavLink title='Only on Apple'/>
			<NavLink title='Accessories'/>
			<NavLink title='Support'/>
			<NavLink title={<SearchOutline color='#d5d5d5'/>} />
			<NavLink title={<BagOutline color='#d5d5d5'/>} />
		</ul>
	)
};


export default Navigation;