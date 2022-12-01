import classes from './HomePage.module.css';
import { Link } from 'react-router-dom';
import { PrimeBanner, SecondBanner, SideBanner } from '../index';

const HomePage = () =>
{
	return (
		<div className={ classes.container }>
			<Link className={classes.link} to='/'>
				<PrimeBanner header='iPhone 14'
					title='Big and bigger.'
					width='500px'
					url={ require( '../assets/iphone.png' ) } />
			</Link>
			<Link className={classes.Link}>
				<PrimeBanner header='iPhone 14 Pro'
					title='Pro. Beyond'
					width='500px'
					url={ require( '../assets/iPhone 14 Pro.png' ) }
					background='black' color='white' />
			</Link>
			<Link className={classes.Link}>
				<SecondBanner header='Give WOW.'
					paragraph1='This holiday season, find the perfect gift'
					paragraph2='for everyone on your list.'
					width='900px'
					height='500px'
					url={ require( '../assets/AppleLogo.png' ) }
					background='#050028' color='white' />
			</Link>
			<div className={classes.section}>
	
				<Link className={classes.Link}>
				<SideBanner header='iPad'
					title='Lovable. Drawable. Magical.'
						width='300px'
						headerTransform='50%'
						addLink={ true }
						link1='Learn more'
						link2='Buy'
						background='white' color='black'
						transformX='0'
						transformY='180px'
						url={require('../assets/iPad.png')}
					/>
				</Link>
				<Link className={classes.Link}>
				<SideBanner header='AirPods'
						title='Share the joy'
						headerTransform='250px'
						link1='Shop'
						width='1300px'
						transformX='-280px'
						transformY='0'
						url={require('../assets/promo_airpods.jpg')}
					background='black' color='black' />
				</Link>
			</div>
			<div className={classes.section}>
	
				<Link className={classes.Link}>
				<SideBanner header='Apple Watch'
					title='SERIES 8'
						width='500px'
						headerTransform='50%'
						addLink={ true }
						link1='Learn more'
						link2='Buy'
						background='black' color='white'
						transformX='0'
						transformY='230px'
						url={require('../assets/AppleWatch.png')}
					/>
				</Link>
				<Link className={classes.Link}>
				<SideBanner header='Apple Watch'
						title='ULTRA'
						headerTransform='170px'
						link1='Shop'
						link2='Buy'
						addLink={true}
						width='700px'
						transformX='0'
						transformY='330px'
						url={require('../assets/AppleWatch2.png')}
					background='white' color='black' />
				</Link>
			</div>
		</div>
	)
};

export default HomePage;