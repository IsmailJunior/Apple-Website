import { Link } from 'react-router-dom';
import classes from './SecondBanner.module.css';
const SecondBanner = ({header, paragraph1, paragraph2, background, color, url, width, height}) =>
{
	return (
		<div className={ classes.container } style={ { background: `${ background }` } }>
			<img className={classes.image} src={url} width={width} height={height} alt={header} />
			<div className={classes.header}>
			<h1 className={classes.h1} style={{color: `${color}`}}>{header}</h1>
				<h3 className={ classes.h3 } style={ { color: `${ color }` } }>{ paragraph1 }</h3>
				<h3 className={ classes.h3 } style={ { color: `${ color }` } }>{ paragraph2 }</h3>
				<div className={ classes.links }>
				<div>
					<Link className={ classes.link } to='/'><span>Shop the gift guide </span></Link><span>></span>
				</div>
				</div>
			</div>
		</div>
	)
};

export default SecondBanner;