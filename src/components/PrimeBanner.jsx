import { Link } from 'react-router-dom';
import classes from './Banner.module.css';
const PrimeBanner = ({header, title, background, color, url, width}) =>
{
	return (
		<div className={ classes.container } style={ { background: `${ background }` } }>
			<div>
			<h1 className={classes.h1} style={{color: `${color}`}}>{header}</h1>
				<h3 className={ classes.h3 } style={ { color: `${ color }` } }>{ title }</h3>
				<div className={ classes.links }>
				<div>
					<Link className={ classes.link } to='/'><span>Learn more </span></Link><span>></span>
				</div>
				<div>
					<Link className={ classes.link } to='/'><span>Buy </span></Link><span>></span>
				</div>
				</div>
			</div>
			<img src={url} width={width} height='400px' alt={header} />
		</div>
	)
};

export default PrimeBanner;