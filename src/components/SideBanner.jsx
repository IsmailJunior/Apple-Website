import { Link } from 'react-router-dom';
import classes from './SideBanner.module.css';
const SideBanner = ({header, title, background, color,logoColor, url, width,titleTransform, transformX, transformY, headerTransform, link1, link2, addLink,color2,logo}) =>
{
	return (
		<div className={ classes.container } style={ { background: `${ background }` } }>
			<img className={ classes.image } style={ { transform: `translateX(${ transformX }) translateY(${transformY})`}} src={url} width={width} alt={header} />
			<div className={classes.header} style={{transform: `translateX(${headerTransform})`}}>
				{ logo && <span className={classes.logo} style={{color: `${logoColor}`}}></span>}<span className={classes.headline} style={{color: `${color}`}}>{header}</span>
				<h3 className={ classes.h3 } style={ { color: `${ color2 }`, marginLeft: `${titleTransform}` } }>{ title }</h3>
				<div className={ classes.links }>
					<div>
					
					<Link className={ classes.link } to='/'><span>{link1}</span></Link><span>></span>
					</div>
					{ addLink && (
						<div>
							<Link className={ classes.link } to='/'><span>{ link2 }</span></Link><span>></span>
						</div>
							)}
				</div>
			</div>
		</div>
	)
};

export default SideBanner;