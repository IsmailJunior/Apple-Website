import classes from './HomePage.module.css';
import { Link } from 'react-router-dom';
import { View } from '../index';

const HomePage = () =>
{
	return (
		<div className={ classes.container }>
			<Link className={classes.link} to='/'>
				<View header='iPhone 14'
					title='Big and bigger.'
					width='500px'
					url={ require( '../assets/iphone.png' ) } />
			</Link>
			<Link className={classes.Link}>
				<View header='iPhone 14 Pro'
					title='Pro. Beyond'
					width='500px'
					url={ require( '../assets/iPhone 14 Pro.png' ) }
					 background='black' color='white' />
			</Link>
		</div>
	)
};

export default HomePage;