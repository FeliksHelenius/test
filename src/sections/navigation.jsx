import Apps from '../assets/icons/apps.svg';
import Person from '../assets/icons/person.svg';
import './navigation.css';

export default function Navigation() {
	return (
		<div id="navigation-bar">
			<div className="navigation-link-wrapper">
				<a href="">Gmail</a>
				<a href="">Images</a>
				<img src={Apps} alt="Apps icon" className="apps-icon icon" />
				<img src={Person} alt="Person icon" className="person-icon icon" />
			</div>
		</div>
	);
}
