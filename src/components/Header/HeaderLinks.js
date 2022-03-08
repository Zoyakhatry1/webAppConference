/*eslint-disable*/
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

// @material-ui/icons
import { Apps, CloudDownload } from '@material-ui/icons';

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js';
import Button from 'components/CustomButtons/Button.js';

import styles from 'assets/jss/material-kit-react/components/headerLinksStyle.js';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
	const classes = useStyles();
	return (
		<List className={classes.list}>
			<ListItem className={classes.listItem}>
				<Link
					to='/home'
					style={{ textDecoration: 'none', color: '#555555' }}
				>
					<Button
						color='transparent'
						target='_blank'
						className={classes.navLink}
						style={{ fontSize: 16, cursor: 'pointer' }}
					>
						HOME
					</Button>
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link
					to='/about'
					style={{ textDecoration: 'none', color: '#555555' }}
				>
					<Button
						color='transparent'
						target='_blank'
						className={classes.navLink}
						style={{ fontSize: 16, cursor: 'pointer' }}
					>
						ABOUT
					</Button>
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link
					to='/committee'
					style={{ textDecoration: 'none', color: '#555555' }}
				>
					<Button
						color='transparent'
						target='_blank'
						className={classes.navLink}
						style={{ fontSize: 16 }}
					>
						COMMITTEES
					</Button>
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link
					to='/speaker'
					style={{ textDecoration: 'none', color: '#555555' }}
				>
					<Button
						color='transparent'
						target='_blank'
						className={classes.navLink}
						style={{ fontSize: 16 }}
					>
						SPEAKERS
					</Button>
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link
					to='/callforpapers'
					style={{ textDecoration: 'none', color: '#555555' }}
				>
					<Button
						color='transparent'
						target='_blank'
						className={classes.navLink}
						style={{ fontSize: 16 }}
					>
						CALL FOR PAPERS
					</Button>
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link
					to='/registration'
					style={{ textDecoration: 'none', color: '#555555' }}
				>
					<Button
						color='transparent'
						target='_blank'
						className={classes.navLink}
						style={{ fontSize: 16 }}
					>
						REGISTRATION
					</Button>
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link
					to='/agenda'
					style={{ textDecoration: 'none', color: '#555555' }}
				>
					<Button
						color='transparent'
						target='_blank'
						className={classes.navLink}
						style={{ fontSize: 16 }}
					>
						GALLERY
					</Button>
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link
					to='/venue'
					style={{ textDecoration: 'none', color: '#555555' }}
				>
					<Button
						color='transparent'
						target='_blank'
						className={classes.navLink}
						style={{ fontSize: 16 }}
					>
						VENUE
					</Button>
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link
					to='/contact'
					style={{ textDecoration: 'none', color: '#555555' }}
				>
					<Button
						color='transparent'
						target='_blank'
						className={classes.navLink}
						style={{ fontSize: 16 }}
					>
						CONTACT US!
					</Button>
				</Link>
			</ListItem>
		</List>
	);
}
