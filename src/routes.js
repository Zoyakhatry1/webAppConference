import Home from 'views/Home/Home';
import Committee from 'views/Committee/Committee';
import Speaker from 'views/Speaker/Speaker';
import Venue from 'views/More/Venue/Venue';
import Registration from 'views/Registration/Registration';
import CallForPapers from 'views/CallForPapers/CallForPapers';
import Contact from 'views/Contact/Contact';

var routes = [
	{
		path: '/home',
		name: 'Home',
		component: Home,
	},
	{
		path: '/committee',
		name: 'Committee',
		component: Committee,
	},
	{
		path: '/speaker',
		name: 'Speaker',
		component: Speaker,
	},
	{
		path: '/venue',
		name: 'Venue',
		component: Venue,
	},
	{
		path: '/registration',
		name: 'Registration',
		component: Registration,
	},
	{
		path: '/callforpapers',
		name: 'CallForPapers',
		component: CallForPapers,
	},
	{
		path: '/contact',
		name: 'Contact',
		component: Contact,
	},
];

export { routes };
