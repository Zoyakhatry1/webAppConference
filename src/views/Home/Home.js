import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react components for routing our app without refresh
import { Link, Switch, Route, Redirect } from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
// core components
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Parallax from 'components/Parallax/Parallax.js';
// sections for this page
import HeaderLinks from 'components/Header/HeaderLinks.js';
import { routes } from 'routes';

import styles from 'assets/jss/material-kit-react/views/components.js';
import {
	faHome,
	faAtlas,
	faGlobe,
	faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import './Home.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import NitSrinagarImage from '../../assets/img/nit_image.jpg';
import AIImage from '../../assets/img/ai_image6.jpg';
import AIImage2 from '../../assets/img/ai_image3.jpg';
import { Colors } from 'assets/Constants/Colors';

const useStyles = makeStyles(styles);
export default function Home(props) {
	const classes = useStyles();
	const { ...rest } = props;
	return (
		<div>
			<div>
				<Carousel
					width='100%'
					infiniteLoop={true}
					showThumbs={false}
					interval={4000}
					showArrows={false}
					emulateTouch={true}
					autoPlay={false}
					stopOnHover={false}
				>
					<div>
						<img src={NitSrinagarImage} />
						<div
							style={{
								position: 'fixed',
								top: '200px',
								width: '100%',
								margin: '0 10px',
							}}
						>
							<h2
								style={{ color: 'yellow' }}
								className={classes.title}
							>
								Internaltional Conference on Intelligent
								Computing
							</h2>
						</div>
						<div
							style={{
								position: 'fixed',
								top: '500px',
								width: '100%',
							}}
						>
							<h5
								style={{
									color: 'yellow',
									margin: '0px',
									position: 'relative',
									left: '20px',
								}}
							>
								<p style={{ fontSize: '50px' }}>IConIC 2022</p>
							</h5>
							<p
								style={{
									color: 'white',
									fontSize: '30px',
									margin: '10px auto',
								}}
							>
								<i>
									The Ist International Conference on
									Intelligent Computing by Dept. of Computer
									Science and Engineering,
								</i>
							</p>
							<p
								style={{
									color: 'white',
									fontSize: '26px',
									margin: '0px',
								}}
							>
								<i>
									{/*<strike>*/}
									National Institute of Technology Srinagar,
									Jammu & kashmir
									{/*</strike>*/}
								</i>
							</p>
							<p
								style={{
									color: 'white',
									fontSize: '26px',
									margin: '0px',
								}}
							>
								<i hidden>Virtual Conference</i>
							</p>
						</div>
					</div>
					<div>
						<img src={AIImage2} />
						<div
							style={{
								position: 'fixed',
								top: '200px',
								width: '90%',
							}}
						>
							<h2
								style={{ color: 'white' }}
								className={classes.title}
							>
								Internaltional Conference on Intelligent
								Computing.
							</h2>
						</div>
						<div
							style={{
								position: 'fixed',
								top: '500px',
								width: '40%',
							}}
						>
							<h5
								style={{
									color: 'white',
									fontSize: '40px',
									margin: '0px',
									position: 'relative',
									left: '20px',
								}}
							>
								<i>IConIC 2022</i>
							</h5>
							<p
								style={{
									color: 'white',
									fontSize: '22px',
									margin: '0px',
								}}
							>
								<i>
									The Ist International Conference on
									Intelligent Computing by Dept. of Computer
									Science and Engineering,
								</i>
							</p>
							<p
								style={{
									color: 'white',
									fontSize: '26px',
									margin: '0px',
								}}
							>
								<i>
									{/*<strike>*/}
									National Institute of Technology Srinagar,
									Jammu & kashmir
									{/*</strike>*/}
								</i>
							</p>
							<p
								style={{
									color: 'white',
									fontSize: '26px',
									margin: '0px',
								}}
							>
								<i hidden>Virtual Conference</i>
							</p>
						</div>
					</div>
					<div>
						<img src={AIImage} />
						<div
							style={{
								position: 'fixed',
								top: '200px',
								width: '90%',
							}}
						>
							<h2
								style={{ color: 'white' }}
								className={classes.title}
							>
								Internaltional Conference on Intelligent
								Computing.
							</h2>
						</div>
						<div
							style={{
								position: 'fixed',
								top: '500px',
								width: '40%',
							}}
						>
							<h5
								style={{
									color: 'white',
									fontSize: '40px',
									margin: '0px',
									position: 'relative',
									left: '20px',
								}}
							>
								<i>IConIC 2022</i>
							</h5>
							<p
								style={{
									color: 'white',
									fontSize: '22px',
									margin: '0px',
								}}
							>
								<i>
									The Ist International Conference on
									Intelligent Computing by Dept. of Computer
									Science and Engineering,
								</i>
							</p>
							<p
								style={{
									color: 'white',
									fontSize: '26px',
									margin: '0px',
								}}
							>
								<i>
									{/*<strike>*/}
									National Institute of Technology Srinagar,
									Jammu & kashmir
									{/*</strike>*/}
								</i>
							</p>
							<p
								style={{
									color: 'white',
									fontSize: '26px',
									margin: '0px',
								}}
							>
								<i hidden>Virtual Conference</i>
							</p>
						</div>
					</div>
				</Carousel>
			</div>
			<div
				className='row'
				style={{
					backgroundColor: Colors.COLOR_BACKGROUND_HEADER,
					margin: '0px',
				}}
			>
				<h2
					style={{
						color: Colors.COLOR_HEADER,
						textAlign: 'center',
						fontWeight: '400',
						marginBottom: '0px',
						margin: '0px',
						paddingTop: '40px',
						paddingRight: '100px',
						paddingLeft: '100px',
						paddingBottom: '25px',
					}}
				>
					<u style={{ textDecoration: 'none' }}>About IConIC</u>
				</h2>
			</div>
			<div className='row about' id='about'>
				<p
					style={{
						textAlign: 'justify',
						margin: '15px 220px 5px 220px',
						fontSize: '22px',
						margin: '0px',
						paddingTop: '40px',
						paddingRight: '200px',
						paddingLeft: '200px',
						paddingBottom: '30px',
					}}
				>
					The Ist International Conference on Internaltional
					Conference on Intelligent Computing (IConIC) is being
					conducted by the Department of Computer Science and
					Engineering, National Institute of Technology, Srinagar,
					India (In Virtual Mode). IConIC- 2022 aims to bring together
					Academicians, Researchers, Industry Experts, Enthusiasts,
					and Professionals to explore emerging trends and
					innovations, as well as discuss research findings and future
					directions in the area of next-generation innovations. This
					technical conference intends to provide an opportunity for
					academia and industry to share research and development
					advancements in emerging fields of Intelligent Computing. It
					offers a common platform to an interdisciplinary group of
					researchers through a strategically designed network of
					premier institutions across India. The conference has also
					Expert Panel discussions and Plenary Talks.
					<br />
					The goal of Application of Internaltional Conference on
					Intelligent Computing (IConIC) is to promote and bring
					together the Indian and global researchers across the areas
					of Artificial Intelligence, computer vision, computational
					biology, natural language processing, and deep learning.
					<br />
					<br />
					<a style={{ position: 'auto' }} href='#' hidden>
						View Brochure
					</a>
				</p>
			</div>
			<div
				className='row'
				style={{
					backgroundColor: Colors.COLOR_BACKGROUND_HEADER,
					margin: '0px',
				}}
			>
				<h2
					style={{
						color: Colors.COLOR_HEADER,
						textAlign: 'center',
						fontWeight: '400',
						marginBottom: '0px',
						margin: '0px',
						paddingTop: '40px',
						paddingRight: '100px',
						paddingLeft: '100px',
						paddingBottom: '25px',
					}}
				>
					<u style={{ textDecoration: 'none' }}>Publication</u>
				</h2>
			</div>
			<div className='row'>
				<p
					style={{
						textAlign: 'center',
						margin: '15px 220px 5px 220px',
						fontSize: '22px',
						margin: '0px',
						paddingTop: '40px',
						paddingRight: '100px',
						paddingLeft: '100px',
						paddingBottom: '30px',
					}}
				>
					- All the accepted and presented papers will be published on{' '}
					<b>IEEE Digital Library</b> and it will be{' '}
					<b>Scopus Indexed</b>.
				</p>
			</div>
			<div
				className='row'
				style={{
					backgroundColor: Colors.COLOR_BACKGROUND_HEADER,
					margin: '0px',
				}}
			>
				<h2
					style={{
						color: Colors.COLOR_HEADER,
						textAlign: 'center',
						fontWeight: '400',
						marginBottom: '0px',
						margin: '0px',
						paddingTop: '40px',
						paddingRight: '100px',
						paddingLeft: '100px',
						paddingBottom: '25px',
					}}
				>
					<u
						style={{
							color: Colors.COLOR_HEADER,
							textDecoration: 'none',
						}}
					>
						Associations
					</u>
				</h2>
			</div>
			<div className='row'>
				<p
					style={{
						textAlign: 'center',
						margin: '15px 220px 5px 220px',
						fontSize: '22px',
						margin: '0px',
						paddingTop: '40px',
						paddingRight: '100px',
						paddingLeft: '100px',
						paddingBottom: '30px',
					}}
				>
					LOGOS OF SPONSERS....
				</p>
			</div>
			<div
				className='row'
				style={{
					backgroundColor: Colors.COLOR_BACKGROUND_HEADER,
					margin: '0px',
				}}
			>
				<h2
					style={{
						color: Colors.COLOR_HEADER,
						textAlign: 'center',
						fontWeight: '400',
						marginBottom: '0px',
						margin: '0px',
						paddingTop: '40px',
						paddingRight: '100px',
						paddingLeft: '100px',
						paddingBottom: '25px',
					}}
				>
					<u
						style={{
							color: Colors.COLOR_HEADER,
							textDecoration: 'none',
						}}
					>
						Tracks
					</u>
				</h2>
			</div>
			<div className='row'>
				<div>
					<div id='tracks'>
						<div className='flip-card'>
							<div className='flip-card-inner'>
								<div
									className='flip-card-front'
									style={{ color: 'white' }}
								>
									<div className='hh4 track-card'>
										{' '}
										Artificial Intelligence and Machine
										Learning{' '}
									</div>
								</div>
								<div className='hh6 flip-card-back'>
									<div className='track-card'>
										<div> - Soft Computing </div>
										<div> - Deep Learning </div>
										<div> - Image Processing </div>
										<div> - Machine Intelligence </div>
										<div>
											{' '}
											-Natural Language Processing Image
											Processing{' '}
										</div>
										<div> - Fuzzy Logic and Systems </div>
										<div> - Neural Network </div>
									</div>
								</div>
							</div>
						</div>
						<div className='flip-card'>
							<div className='flip-card-inner'>
								<div
									className='flip-card-front'
									style={{ color: 'white' }}
								>
									<div className='hh4 track-card'>
										{' '}
										Computational Biology{' '}
									</div>
								</div>
								<div className='hh6 flip-card-back'>
									<div className='track-card'>
										<div> - Genetic Engineering </div>
										<div> - Synthetic Biology </div>
										<div> - Bioinformatics </div>
										<div> - microRNA classification </div>
										<div>
											{' '}
											- DNA, RNA, and Protein Sequencing{' '}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='flip-card'>
							<div className='flip-card-inner'>
								<div
									className='flip-card-front'
									style={{ color: 'white' }}
								>
									<div className='hh4 track-card'>
										{' '}
										Image Processing and Computer Vision{' '}
									</div>
								</div>
								<div className='hh6 flip-card-back'>
									<div className='track-card'>
										<div> - Pattern Recognition </div>
										<div> - Image Processing </div>
										<div> - Remote Sensing </div>
										<div> - Object Detection </div>
										<div> - Video Processing </div>
										<div>
											{' '}
											- Facial Expression Recognition{' '}
										</div>
										<div>
											{' '}
											- Image and Object Segmentation{' '}
										</div>
										<div> - 3D Pose Estimation </div>
									</div>
								</div>
							</div>
						</div>
						<div className='flip-card'>
							<div className='flip-card-inner'>
								<div
									className='flip-card-front'
									style={{ color: 'white' }}
								>
									<div className='hh4 track-card'>
										{' '}
										Computing and Networking{' '}
									</div>
								</div>
								<div className='hh6 flip-card-back'>
									<div className='track-card'>
										<div> - Internet of Things </div>
										<div>- Block chain Technology</div>
										<div>- Software Defined Networks</div>
										<div>
											- Computer Networks, Security and
											Applications
										</div>
										<div>
											- Distributed and Parallel Systems
										</div>
										<div>- Cyber Security</div>
										<div>- Ethical Hacking</div>
										<div>- Ad-hoc and Sensor Networks</div>
									</div>
								</div>
							</div>
						</div>
						<div className='flip-card'>
							<div className='flip-card-inner'>
								<div
									className='flip-card-front'
									style={{ color: 'white' }}
								>
									<div className='hh4 track-card'>
										{' '}
										AR/ VR Applications{' '}
									</div>
								</div>
								<div className='hh6 flip-card-back'>
									<div className='track-card'>
										<div>
											{' '}
											- Robotics and Virtual Reality
											Technology{' '}
										</div>
										<div> - Gamification </div>
										<div> - Mixed Reality </div>
										<div>
											{' '}
											- Human Computer Interaction{' '}
										</div>
										<div> - Augmented Reality </div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					style={{
						textAlign: 'center',
						margin: '15px 220px 5px 220px',
						fontSize: '22px',
						margin: '0px',
					}}
				>
					<p style={{ fontSize: '20px', margin: '0px 0px 10px' }}>
						{' '}
						- For more details about tracks,
						<a href='#'>CLick Here!</a>
					</p>
				</div>
			</div>
			<div
				className='row'
				style={{
					backgroundColor: Colors.COLOR_BACKGROUND_HEADER,
					margin: '0px',
				}}
			>
				<h2
					style={{
						color: Colors.COLOR_HEADER,
						textAlign: 'center',
						fontWeight: '400',
						marginBottom: '0px',
						margin: '0px',
						paddingTop: '40px',
						paddingRight: '100px',
						paddingLeft: '100px',
						paddingBottom: '25px',
					}}
				>
					<u
						style={{
							color: Colors.COLOR_HEADER,
							textDecoration: 'none',
						}}
					>
						Special Sessions
					</u>
				</h2>
			</div>
			<div className='row'>
				<div
				//style={{
				//    textAlign: 'center',
				//    margin: '15px 220px 5px 220px',
				//    fontSize: '22px',
				//    margin: "0px",
				//    paddingTop: "40px",
				//    paddingRight: "100px",
				//    paddingLeft: "100px",
				//    paddingBottom: "30px",
				//}}
				>
					<div id='tracks'>
						<div className='flip-card'>
							<div className='flip-card-inner'>
								<div className='flip-card-front'>
									<div className='hh4 track-card'>
										Intelligent Information Processing{' '}
									</div>
								</div>
								<div className='hh6 flip-card-back'>
									<div className='track-card'>
										<div> - Agent-Based Systems</div>
										<br />
										<div> - Data Science </div>
										<br />
										<div>- Predictive Analysis</div>
									</div>
								</div>
							</div>
						</div>
						<div className='flip-card'>
							<div className='flip-card-inner'>
								<div className='flip-card-front'>
									<div className='hh4 track-card'>
										Intelligent Modelling Using Deep
										Learning{' '}
									</div>
								</div>
								<div className='hh6 flip-card-back'>
									<div className='track-card'>
										<div> - Document Analysis</div>
										<br />
										<div> - Image Segmentation </div>
										<br />
										<div>- Ear Biometrics</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					style={{
						textAlign: 'center',
						margin: '15px 220px 5px 220px',
						fontSize: '22px',
						margin: '0px',
					}}
				>
					<p style={{ fontSize: '20px', margin: '0px 0px 10px' }}>
						{' '}
						- For more details about sessions,
						<a href='#'>CLick Here!</a>
					</p>
				</div>
			</div>
			<div
				className='row'
				style={{
					backgroundColor: Colors.COLOR_BACKGROUND_HEADER,
					margin: '0px',
				}}
			>
				<h2
					style={{
						color: Colors.COLOR_HEADER,
						textAlign: 'center',
						fontWeight: '400',
						marginBottom: '0px',
						margin: '0px',
						paddingTop: '40px',
						paddingRight: '100px',
						paddingLeft: '100px',
						paddingBottom: '25px',
					}}
				>
					<u
						style={{
							color: Colors.COLOR_HEADER,
							textDecoration: 'none',
						}}
					>
						Important Dates
					</u>
				</h2>
			</div>
			<div>
				<div id='table-container'>
					<table align='center' id='imp-dates'>
						<tbody>
							<tr>
								<td className='hh4'>Submission Deadline</td>
								<td className='hh4 '>
									<strike>10th July, 2021</strike>{' '}
									<span id='dates'>31st July, 2021</span>
								</td>
							</tr>
							<tr>
								<td className='hh4 '>
									Acceptance Notification
								</td>
								<td className='hh4 '>
									<strike>15th July, 2021</strike>{' '}
									<span id='dates'>5th August, 2021</span>
								</td>
							</tr>
							<tr>
								<td className='hh4 '>
									Early-Bird Registrations
								</td>
								<td className='hh4 ' id='dates'>
									15th August, 2021
								</td>
							</tr>
							<tr>
								<td className='hh4'>
									Camera-Ready Submission{' '}
								</td>
								<td className='hh4 ' id='dates'>
									25th August, 2021
								</td>
							</tr>
							<tr>
								<td className='hh4 '>
									Final Version Submission
								</td>
								<td className='hh4 ' id='dates'>
									25th August, 2021
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div
				className='row'
				style={{
					backgroundColor: Colors.COLOR_BACKGROUND_HEADER,
					margin: '0px',
				}}
			>
				<h2
					style={{
						color: Colors.COLOR_HEADER,
						textAlign: 'center',
						fontWeight: '400',
						marginBottom: '0px',
						margin: '0px',
						paddingTop: '40px',
						paddingRight: '100px',
						paddingLeft: '100px',
						paddingBottom: '25px',
					}}
				>
					<u
						style={{
							color: Colors.COLOR_HEADER,
							textDecoration: 'none',
						}}
					>
						Registration Fees
					</u>
				</h2>
			</div>
			<div>
				<div id='table-container'>
					<table align='center' id='imp-dates'>
						<tbody>
							<tr>
								<td className='hh3' rowspan='2'>
									Student Registration
									<br />
									(for Virtual Participation)
								</td>
								<td className='hh4'>IEEE/CSI Member</td>
								<td className='hh4' id='amount'>
									₹4000
								</td>
							</tr>
							<tr>
								<td className='hh4'>Others</td>
								<td className='hh4' id='amount'>
									₹5000
								</td>
							</tr>

							<tr>
								<td className='hh3' rowspan='2'>
									Student Registration
									<br />
									(for Offline Participation)
								</td>
								<td className='hh4'>IEEE/CSI Member</td>
								<td className='hh4' id='amount'>
									₹5000
								</td>
							</tr>
							<tr>
								<td className='hh4'>Others</td>
								<td className='hh4' id='amount'>
									₹6000
								</td>
							</tr>

							<tr>
								<td className='hh3' rowspan='2'>
									Faculty Registration
								</td>
								<td className='hh4'>IEEE/CSI Member</td>
								<td className='hh4' id='amount'>
									₹7500
								</td>
							</tr>
							<tr>
								<td className='hh4'>Others</td>
								<td className='hh4' id='amount'>
									₹9000
								</td>
							</tr>

							<tr>
								<td className='hh3' rowspan='2'>
									Industry Member
								</td>
								<td className='hh4'>IEEE/CSI Member</td>
								<td className='hh4' id='amount'>
									₹9000
								</td>
							</tr>
							<tr>
								<td className='hh4'>Others</td>
								<td className='hh4' id='amount'>
									₹11000
								</td>
							</tr>

							<tr>
								<td className='hh3' rowspan='2'>
									International Registration
								</td>
								<td className='hh4'>IEEE/CSI Member</td>
								<td className='hh4' id='amount'>
									$300
								</td>
							</tr>
							<tr>
								<td className='hh4'>Others</td>
								<td className='hh4' id='amount'>
									$350
								</td>
							</tr>

							<tr>
								<td className='hh3' rowspan='2'>
									Attendee
								</td>
								<td className='hh4'>-</td>
								<td className='hh4' id='amount'>
									₹1000
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div
				className='row'
				style={{
					backgroundColor: Colors.COLOR_BACKGROUND_HEADER,
					margin: '0px',
				}}
			>
				<h2
					style={{
						color: Colors.COLOR_HEADER,
						textAlign: 'center',
						fontWeight: '400',
						marginBottom: '0px',
						margin: '0px',
						paddingTop: '40px',
						paddingRight: '100px',
						paddingLeft: '100px',
						paddingBottom: '25px',
					}}
				>
					<u
						style={{
							color: Colors.COLOR_HEADER,
							textDecoration: 'none',
						}}
					>
						Gallery
					</u>
				</h2>
			</div>
			<div>
				<p
					style={{
						textAlign: 'center',
						margin: '15px 220px 5px 220px',
						fontSize: '22px',
						margin: '0px',
						paddingTop: '40px',
						paddingRight: '200px',
						paddingLeft: '200px',
						paddingBottom: '30px',
					}}
				>
					PHOTO GALLERY....
				</p>
			</div>
			<div
				className='row'
				style={{
					backgroundColor: Colors.COLOR_BACKGROUND_HEADER,
					margin: '0px',
				}}
			>
				<h2
					style={{
						color: Colors.COLOR_HEADER,
						textAlign: 'center',
						fontWeight: '400',
						marginBottom: '0px',
						margin: '0px',
						paddingTop: '40px',
						paddingRight: '100px',
						paddingLeft: '100px',
						paddingBottom: '25px',
					}}
				>
					<u
						style={{
							color: Colors.COLOR_HEADER,
							textDecoration: 'none',
						}}
					>
						Contact Us
					</u>
				</h2>
			</div>

			<div>
				<div
					id='reach-us'
					style={{ background: '#e6e9ed', width: '100%' }}
				>
					<div
						className='reach-us-content'
						style={{
							textAlign: 'center',
							fontWeight: '100',
						}}
					>
						<div className='reach-us-info'>
							<div className='reach-us-address'>
								<p
									className='hh5'
									style={{ fontWeight: 'bold' }}
								>
									National Institute of Technology,
									<br />
									Hazratbal, Srinagar,
									<br />
									Jammu and Kashmir (UT), 190006,
									<br />
									INDIA.
								</p>
							</div>
							<br />
							<br />
							<div className='reach-us-email'>
								<p
									className='hh3'
									style={{
										color: '#2C6C82',
										fontWeight: '600px',
									}}
								>
									Email:
								</p>
								<p className='hh5' style={{ color: 'black' }}>
									<h5>
										For any qeuery, feel free to mail us,{' '}
										<a
											id='mail'
											style={{
												textDecoration: 'underline',
												color: 'black',
											}}
											href='mailto:info@nitsri.ac.in'
										>
											info@nitsri.ac.in
										</a>
									</h5>
								</p>
							</div>
							<br />
							<div className='reach-us-phone'>
								<p
									className='hh3'
									style={{
										color: '#2C6C82',
										fontWeight: '600px',
									}}
								>
									Contact:
								</p>
								<p className='hh5'>
									<h5>
										For Registration related problems,
										contact:{' '}
									</h5>
									Dr. Ranjeet K. Rout:{' '}
									<span
										id='contact'
										style={{ textDecoration: 'underline' }}
									>
										{' '}
										+91-8917595990
									</span>
									<h5>
										For Submission related problems,
										contact:{' '}
									</h5>
									Dr. Ranjeet K. Rout:{' '}
									<span
										id='contact'
										style={{ textDecoration: 'underline' }}
									>
										{' '}
										+91-8917595990
									</span>
									<br />
									{/*Dr. Samir Patel: <span id="contact" style={{ textDecoration: 'underline' }}> +91-9427401616</span>*/}
								</p>
							</div>
						</div>
						<div
							className='nit-map-div'
							style={{ paddingTop: '0px' }}
						>
							<iframe
								src={`https://www.google.com/maps/embed/v1/place?q=NIT%20Srinagar%2C%20Nagin%20Bagh%2C%20Srinagar
                                        &key=AIzaSyBlwkGJF1r-ncyrjWedVp6hcSR63ahNvOQ`}
								height='500px'
								width='100%'
								style={{
									border: '1px solid black',
									borderRadius: '10px',
									boxShadow: ' 0 4px 8px 0 rgba(0,0,0,0.4)',
								}}
								allowfullscreen=''
								loading='lazy'
								className='pdpu-map'
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
