import { Switch, Route } from 'react-router-dom';
import { Layout, HomePage,Navigation } from './index';
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
			</Switch>
			</Layout>
		</div>
	);
};

export default App;

