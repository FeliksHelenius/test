import Navigation from './sections/navigation';
import Main from './sections/main';
import Footer from './sections/footer';

import { Fragment } from 'react';

export default function App() {
	return (
		<Fragment>
			<Navigation />
			<Main>
				<a href="">/*Firefox logo*/</a>
				<colgroup></colgroup>
			</Main>
			<Footer />
		</Fragment>
	);
}
