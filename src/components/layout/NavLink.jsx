import { Link } from 'react-router-dom';

const NavLink = ( { title, link } ) =>
{
	return (
			<li>
			<Link to={ link }>{ title }</Link>
			</li>
	)
};

export default NavLink;