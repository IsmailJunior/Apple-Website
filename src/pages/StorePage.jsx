import React, {useState} from 'react';
import { Store } from '../index';
const StorePage = () =>
{
	const [ data, setData ] = useState( null );
	return (
		<div>
			<Store />
		</div>
	)
};

export default StorePage;