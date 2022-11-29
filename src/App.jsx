import { Switch, Route } from 'react-router-dom';
import { Layout, HomePage, StorePage, Navigation } from './index';
const App = () =>
{
	return (
		<div>
		<Navigation />
		<Layout>
			<Switch>
				<Route path='/' exact>
					<HomePage />
				</Route>
				<Route path='/store'>
					<StorePage />
				</Route>
			</Switch>
			</Layout>
		</div>
	);
};

export default App;

