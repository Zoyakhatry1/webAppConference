import React from 'react';

import { Colors } from 'assets/Constants/Colors';
import './CallForPapers.css';

export default () => (
	<div>
		<div
			className='row'
			style={{
				backgroundColor: Colors.COLOR_BACKGROUND_HEADER,
				marginTop: '40px',
				width: 'auto',
			}}
		>
			<h2
				style={{
					color: Colors.COLOR_HEADER,
					textAlign: 'center',
					fontWeight: '400',
					marginBottom: '0px',
					margin: '0px',
					paddingTop: '50px',
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
								style={{
									color: 'white',
									backgroundColor: 'rgba(6, 12, 34, 0.98)',
								}}
							>
								<div className='hh4 track-card'>
									{' '}
									Artificial Intelligence and Machine Learning{' '}
								</div>
							</div>
							<div
								className='hh6 flip-card-back'
								style={{
									backgroundColor: 'rgb(6 22 80 / 98%)',
								}}
							>
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
								style={{
									color: 'white',
									backgroundColor: 'rgba(6, 12, 34, 0.98)',
								}}
							>
								<div className='hh4 track-card'>
									{' '}
									Computational Biology{' '}
								</div>
							</div>
							<div
								className='hh6 flip-card-back'
								style={{
									backgroundColor: 'rgb(6 22 80 / 98%)',
								}}
							>
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
								style={{
									color: 'white',
									backgroundColor: 'rgba(6, 12, 34, 0.98)',
								}}
							>
								<div className='hh4 track-card'>
									{' '}
									Image Processing and Computer Vision{' '}
								</div>
							</div>
							<div
								className='hh6 flip-card-back'
								style={{
									backgroundColor: 'rgb(6 22 80 / 98%)',
								}}
							>
								<div className='track-card'>
									<div> - Pattern Recognition </div>
									<div> - Image Processing </div>
									<div> - Remote Sensing </div>
									<div> - Object Detection </div>
									<div> - Video Processing </div>
									<div> - Facial Expression Recognition </div>
									<div> - Image and Object Segmentation </div>
									<div> - 3D Pose Estimation </div>
								</div>
							</div>
						</div>
					</div>
					<div className='flip-card'>
						<div className='flip-card-inner'>
							<div
								className='flip-card-front'
								style={{
									color: 'white',
									backgroundColor: 'rgba(6, 12, 34, 0.98)',
								}}
							>
								<div className='hh4 track-card'>
									{' '}
									Computing and Networking{' '}
								</div>
							</div>
							<div
								className='hh6 flip-card-back'
								style={{
									backgroundColor: 'rgb(6 22 80 / 98%)',
								}}
							>
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
								style={{
									color: 'white',
									backgroundColor: 'rgba(6, 12, 34, 0.98)',
								}}
							>
								<div className='hh4 track-card'>
									{' '}
									AR/ VR Applications{' '}
								</div>
							</div>
							<div
								className='hh6 flip-card-back'
								style={{
									backgroundColor: 'rgb(6 22 80 / 98%)',
								}}
							>
								<div className='track-card'>
									<div>
										{' '}
										- Robotics and Virtual Reality
										Technology{' '}
									</div>
									<div> - Gamification </div>
									<div> - Mixed Reality </div>
									<div> - Human Computer Interaction </div>
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
					<a href='#'>Click Here!</a>
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
			<div>
				<div id='tracks'>
					<div className='flip-card'>
						<div className='flip-card-inner'>
							<div
								className='flip-card-front'
								style={{
									color: 'white',
									backgroundColor: 'rgba(6, 12, 34, 0.98)',
								}}
							>
								<div className='hh4 track-card'>
									Intelligent Information Processing{' '}
								</div>
							</div>
							<div
								className='hh6 flip-card-back'
								style={{
									backgroundColor: 'rgb(6 22 80 / 98%)',
								}}
							>
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
							<div
								className='flip-card-front'
								style={{
									color: 'white',
									backgroundColor: 'rgba(6, 12, 34, 0.98)',
								}}
							>
								<div className='hh4 track-card'>
									Intelligent Modelling Using Deep Learning{' '}
								</div>
							</div>
							<div
								className='hh6 flip-card-back'
								style={{
									backgroundColor: 'rgb(6 22 80 / 98%)',
								}}
							>
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
		</div>
		<div className='mainContainer'>
			<div className='container'>
				<h2 className='header'>Instructions for Authors</h2>
				<ul className='text'>
					<li>The conference is being organised in hybrid mode.</li>
					<li>
						Original papers based on theoretical or experimental
						works related to the above mentioned sub themes are
						solicited for presentation in the conference. The paper
						should begin with title, short abstract and a list of
						keywords. Simultaneous submissions (papers already
						submitted to other conferences/journals) are not
						allowed.
					</li>
					<li>Please do not submit plagiarized papers.</li>
					<li>
						The total length of the paper must not exceed eight A4
						size pages including bibliography and appendices. Paper
						must be in PDF.
					</li>
					<li>
						All the papers will be submitted through on-line paper
						submission process (Easy chair submission system).
						Authors are requested to upload a blind copy by clicking
						the paper submission link :- <a>Submit Here</a>
					</li>
					<li>
						It is planned to publish the peer reviewed and selected
						papers of conference as proceedings with Springer in
						their prestigious “Lecture Notes in Electrical
						Engineering” series (<a>Click Here</a>).
					</li>
					<li>
						All papers must follow strict formatting instructions,
						For detailed instructions for authors, kindly visit the
						following link: <a>Click Here</a>
					</li>
				</ul>
			</div>
			<br />
			<div className='container'>
				<h2 className='header'>Review Process</h2>
				<p className='text'>
					The conference aims at carrying out two rounds of review
					process. In the first round, the papers submitted by the
					authors will be assessed on the basis of their technical
					suitability, scope of work and plagiarism, to be checked by
					standard commercial plagiarism tool. The qualifying
					submissions will be double blind reviewed by at-least two
					experts on the basis of originality, novelty, clarity,
					completeness, relevance, significance and research
					contribution. The shortlisted papers will be accepted for
					presentation and presented papers will be published in the
					conference proceedings.
				</p>
			</div>
			<br />
			<div className='container'>
				<h2 className='header'>Copy Right Form</h2>
				<p className='text'>
					In order to publish paper in the conference proceeding, the
					authors are required to submit a signed copyright form for
					each accepted paper during registration.
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
						paddingBottom: '10px',
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
				<div id='table-container' style={{ paddingTop: '0px' }}>
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
		</div>
		<div
			style={{
				textAlign: 'center',
				justifyContent: 'center',
				fontSize: '20px',
			}}
		>
			For any query, kindly contact at:
			<br />
			<a>inonic@nitsri.net</a>
		</div>
	</div>
);
