import React from 'react';

import { Colors } from 'assets/Constants/Colors';
import './Committee.css';
import director from 'assets/img/faces/director.jpg';

export default () => (
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
					paddingTop: '20px',
					paddingRight: '100px',
					paddingLeft: '100px',
				}}
			>
				<u>Chief Patron</u>
			</h2>
		</div>
		<div className='row'>
			<img
				style={{
					display: 'block',
					marginLeft: 'auto',
					marginRight: 'auto',
				}}
				src={director}
			/>
			<p
				className='names'
				style={{
					//backgroundColor: '#e5e5e5',
					textAlign: 'center',
					margin: '15px 220px 5px 220px',
					fontSize: '22px',
					margin: '0px',
					paddingTop: '10px',
					paddingRight: '200px',
					paddingLeft: '200px',
					paddingBottom: '30px',
				}}
			>
				- Prof. (Dr.) Rakesh Sehgal{' '}
				<span className='designation'>(Director, NIT Srinagar)</span>
			</p>
		</div>
		<div
			className='row'
			style={{ backgroundColor: Colors.COLOR_BACKGROUND_HEADER }}
		>
			<h2
				style={{
					color: Colors.COLOR_HEADER,
					textAlign: 'center',
					fontWeight: '400',
					marginBottom: '0px',
					paddingRight: '100px',
					paddingLeft: '100px',
					paddingBottom: '10px',
				}}
			>
				<u>Patron</u>
			</h2>
		</div>
		<div className='row'>
			<p
				className='names'
				style={{
					//backgroundColor: '#e5e5e5',
					textAlign: 'center',
					margin: '15px 220px 5px 220px',
					fontSize: '22px',
					margin: '0px',
					paddingTop: '10px',
					paddingRight: '200px',
					paddingLeft: '200px',
					paddingBottom: '30px',
				}}
			>
				- Prof. (Dr.) Sunil Khanna{' '}
				<span className='designation'>(Director, SOT, PDEU)</span>
			</p>
		</div>
		<div
			className='row'
			style={{ backgroundColor: Colors.COLOR_BACKGROUND_HEADER }}
		>
			<h2
				style={{
					color: Colors.COLOR_HEADER,
					textAlign: 'center',
					fontWeight: '400',
					marginBottom: '0px',
					paddingRight: '100px',
					paddingLeft: '100px',
					paddingBottom: '10px',
				}}
			>
				<u>Advisory Board</u>
			</h2>
		</div>
		<div className='row'>
			<p
				style={{
					//backgroundColor: '#e5e5e5',
					textAlign: 'center',
					margin: '15px 220px 5px 220px',
					fontSize: '22px',
					margin: '0px',
					paddingTop: '10px',
					paddingRight: '200px',
					paddingLeft: '200px',
					paddingBottom: '30px',
				}}
			>
				<div className='names'>
					- Prof. (Dr.) Sunil Khanna{' '}
					<span className='designation'>(Director, SOT, PDEU)</span>
				</div>
				<div className='names'>
					- Prof. (Dr.) Sunil Khanna{' '}
					<span className='designation'>(Director, SOT, PDEU)</span>
				</div>
				<div className='names'>
					- Prof. (Dr.) Sunil Khanna{' '}
					<span className='designation'>(Director, SOT, PDEU)</span>
				</div>
				<div className='names'>
					- Prof. (Dr.) Sunil Khanna{' '}
					<span className='designation'>(Director, SOT, PDEU)</span>
				</div>
			</p>
		</div>
		<div
			className='row'
			style={{ backgroundColor: Colors.COLOR_BACKGROUND_HEADER }}
		>
			<h2
				style={{
					color: Colors.COLOR_HEADER,
					textAlign: 'center',
					fontWeight: '400',
					marginBottom: '0px',
					paddingRight: '100px',
					paddingLeft: '100px',
					paddingBottom: '10px',
				}}
			>
				<u>General Chair</u>
			</h2>
		</div>
		<div className='row'>
			<p
				style={{
					//backgroundColor: '#e5e5e5',
					textAlign: 'center',
					margin: '15px 220px 5px 220px',
					fontSize: '22px',
					margin: '0px',
					paddingTop: '10px',
					paddingRight: '200px',
					paddingLeft: '200px',
					paddingBottom: '30px',
				}}
			>
				<div className='names'>
					- Dr. Shakti Mishra <span>(PDEU, Gandhinagar)</span>
				</div>
				<div className='names'>
					- Dr. Shakti Mishra <span>(PDEU, Gandhinagar)</span>
				</div>
				<div className='names'>
					- Dr. Shakti Mishra <span>(PDEU, Gandhinagar)</span>
				</div>
				<div className='names'>
					- Dr. Shakti Mishra <span>(PDEU, Gandhinagar)</span>
				</div>
			</p>
		</div>
		<div
			className='row'
			style={{ backgroundColor: Colors.COLOR_BACKGROUND_HEADER }}
		>
			<h2
				style={{
					color: Colors.COLOR_HEADER,
					textAlign: 'center',
					fontWeight: '400',
					marginBottom: '0px',
					paddingRight: '100px',
					paddingLeft: '100px',
					paddingBottom: '10px',
				}}
			>
				<u>Technical Chair(s)</u>
			</h2>
		</div>
		<div className='row'>
			<p
				style={{
					//backgroundColor: '#e5e5e5',
					textAlign: 'center',
					margin: '15px 220px 5px 220px',
					fontSize: '22px',
					margin: '0px',
					paddingTop: '10px',
					paddingRight: '200px',
					paddingLeft: '200px',
					paddingBottom: '30px',
				}}
			>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
			</p>
		</div>
		<div
			className='row'
			style={{ backgroundColor: Colors.COLOR_BACKGROUND_HEADER }}
		>
			<h2
				style={{
					color: Colors.COLOR_HEADER,
					textAlign: 'center',
					fontWeight: '400',
					marginBottom: '0px',
					paddingRight: '100px',
					paddingLeft: '100px',
					paddingBottom: '10px',
				}}
			>
				<u>Publication Chair(s)</u>
			</h2>
		</div>
		<div className='row'>
			<p
				style={{
					//backgroundColor: '#e5e5e5',
					textAlign: 'center',
					margin: '15px 220px 5px 220px',
					fontSize: '22px',
					margin: '0px',
					paddingTop: '10px',
					paddingRight: '200px',
					paddingLeft: '200px',
					paddingBottom: '30px',
				}}
			>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
			</p>
		</div>
		<div
			className='row'
			style={{ backgroundColor: Colors.COLOR_BACKGROUND_HEADER }}
		>
			<h2
				style={{
					color: Colors.COLOR_HEADER,
					textAlign: 'center',
					fontWeight: '400',
					marginBottom: '0px',
					paddingRight: '100px',
					paddingLeft: '100px',
					paddingBottom: '10px',
				}}
			>
				<u>Finance Chair</u>
			</h2>
		</div>
		<div className='row'>
			<p
				style={{
					//backgroundColor: '#e5e5e5',
					textAlign: 'center',
					margin: '15px 220px 5px 220px',
					fontSize: '22px',
					margin: '0px',
					paddingTop: '10px',
					paddingRight: '200px',
					paddingLeft: '200px',
					paddingBottom: '30px',
				}}
			>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
			</p>
		</div>
		<div
			className='row'
			style={{ backgroundColor: Colors.COLOR_BACKGROUND_HEADER }}
		>
			<h2
				style={{
					color: Colors.COLOR_HEADER,
					textAlign: 'center',
					fontWeight: '400',
					marginBottom: '0px',
					paddingRight: '100px',
					paddingLeft: '100px',
					paddingBottom: '10px',
				}}
			>
				<u>Industry Liasion Chair</u>
			</h2>
		</div>
		<div className='row'>
			<p
				style={{
					//backgroundColor: '#e5e5e5',
					textAlign: 'center',
					margin: '15px 220px 5px 220px',
					fontSize: '22px',
					margin: '0px',
					paddingTop: '10px',
					paddingRight: '200px',
					paddingLeft: '200px',
					paddingBottom: '30px',
				}}
			>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
			</p>
		</div>
		<div
			className='row'
			style={{ backgroundColor: Colors.COLOR_BACKGROUND_HEADER }}
		>
			<h2
				style={{
					color: Colors.COLOR_HEADER,
					textAlign: 'center',
					fontWeight: '400',
					marginBottom: '0px',
					paddingRight: '100px',
					paddingLeft: '100px',
					paddingBottom: '10px',
				}}
			>
				<u>Publicity Committee Chair(s)</u>
			</h2>
		</div>
		<div className='row'>
			<p
				style={{
					//backgroundColor: '#e5e5e5',
					textAlign: 'center',
					margin: '15px 220px 5px 220px',
					fontSize: '22px',
					margin: '0px',
					paddingTop: '10px',
					paddingRight: '200px',
					paddingLeft: '200px',
					paddingBottom: '30px',
				}}
			>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
			</p>
		</div>
		<div
			className='row'
			style={{ backgroundColor: Colors.COLOR_BACKGROUND_HEADER }}
		>
			<h2
				style={{
					color: Colors.COLOR_HEADER,
					textAlign: 'center',
					fontWeight: '400',
					marginBottom: '0px',
					paddingRight: '100px',
					paddingLeft: '100px',
					paddingBottom: '10px',
				}}
			>
				<u>Publicity Committee</u>
			</h2>
		</div>
		<div className='row'>
			<p
				style={{
					//backgroundColor: '#e5e5e5',
					textAlign: 'center',
					margin: '15px 220px 5px 220px',
					fontSize: '22px',
					margin: '0px',
					paddingTop: '10px',
					paddingRight: '200px',
					paddingLeft: '200px',
					paddingBottom: '30px',
				}}
			>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
			</p>
		</div>
		<div
			className='row'
			style={{ backgroundColor: Colors.COLOR_BACKGROUND_HEADER }}
		>
			<h2
				style={{
					color: Colors.COLOR_HEADER,
					textAlign: 'center',
					fontWeight: '400',
					marginBottom: '0px',
					paddingRight: '100px',
					paddingLeft: '100px',
					paddingBottom: '10px',
				}}
			>
				<u>Special Session Chair(s)</u>
			</h2>
		</div>
		<div className='row'>
			<p
				style={{
					//backgroundColor: '#e5e5e5',
					textAlign: 'center',
					margin: '15px 220px 5px 220px',
					fontSize: '22px',
					margin: '0px',
					paddingTop: '10px',
					paddingRight: '200px',
					paddingLeft: '200px',
					paddingBottom: '30px',
				}}
			>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
				<div className='names'>
					- Dr. Pankaj Kumar <span>(DAIICT)</span>
				</div>
			</p>
		</div>
	</div>
);
