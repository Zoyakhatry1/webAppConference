import React from 'react';
import { Colors } from 'assets/Constants/Colors';

export default function About() {
	return (
		<div style={{ backgroundColor: 'white' }}>
			<div
				className='row title'
				style={{ backgroundColor: Colors.COLOR_BACKGROUND_HEADER }}
			>
				<h2
					style={{
						color: Colors.COLOR_HEADER,
						textAlign: 'center',
						fontWeight: '400',
						marginBottom: '0px',
						margin: '0px',
						paddingTop: '20px',
						paddingRight: '100px',
						paddingLeft: '100px',
						paddingBottom: '0px',
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
						paddingTop: '20px',
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
				</p>
			</div>
		</div>
	);
}
