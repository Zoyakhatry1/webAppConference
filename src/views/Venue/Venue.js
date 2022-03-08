import React from 'react';
import { Colors } from 'assets/Constants/Colors';

export default () => (
	<div style={{ backgroundColor: 'white' }}>
		<div
			className='row title'
			style={{ backgroundColor: Colors.COLOR_BACKGROUND_HEADER }}
		>
			<h2
				style={{
					color: Colors.COLOR_HEADER,
					textAlign: 'Left',
					fontWeight: '400',
					marginBottom: '0px',
					marginLeft: '95px',
					paddingTop: '20px',
					paddingRight: '100px',
					paddingLeft: '100px',
				}}
			>
				<u style={{ textDecoration: 'none' }}>Getting Here</u>
			</h2>
		</div>
		<div className='row' hidden>
			<p
				style={{
					backgroundColor: '#e5e5e5',
					textAlign: 'justify',
					margin: '15px 220px 5px 220px',
					fontSize: '22px',
					margin: '0px',
					paddingTop: '10px',
					paddingRight: '200px',
					paddingLeft: '200px',
					paddingBottom: '30px',
				}}
			>
				Due to the outbreaks and continuing impacts of the COVID-19
				recently, considering the safety and well-being of participants,
				IConIC organizing committee decide to held the conference
				VIRTUALLY. We are sorry for the inconveniences caused. Your
				supports and collaborations are greatly appreciated.
			</p>
		</div>
		<div className='row'>
			<p
				style={{
					backgroundColor: '#e5e5e5',
					textAlign: 'justify',
					margin: '15px 220px 5px 220px',
					fontSize: '22px',
					margin: '0px',
					paddingTop: '10px',
					paddingRight: '200px',
					paddingLeft: '200px',
					paddingBottom: '30px',
				}}
			>
				The Institute is located in Srinagar, the summer capital of J&K
				at Hazratbal, Srinagar 10 KMS from the city centre. The Campus
				is surrounded by the scenic Himalayan ranges, the Zabarwan Hills
				and world famous Dal Lake on its East side and the most revered
				shrine of the Country Hazratbal Shrine on the North side.
				Hazratbal is well connected with most parts of the city and
				valley by a motor-able road and other transport service. The
				campus is about 22 KMs away from the Srinagar International
				Airport. It falls on National Highway to Ladakh. The nearest
				railway station is Nowgam which is located about 18 km from the
				Institute campus.
				<br />
				<br /> The campus is connected with Jammu / Delhi by
				Srinagar-Jammu highway which passes through high mountain passes
				which are picturesque and enjoyable, and can be covered in about
				7-8 hours by a private taxi/car. The Institute is having a lush
				green campus spread over 67 acres of land on the banks of
				world-famous Dal Lake.
				<br /> The Institute is residential with accommodation facility
				for students and staff in hostels and Residential Quarters.
				There are five boys and two girls hostels which accommodate
				about 2000 boys and 200 girls with separate mess facility for
				each hostel. <br />
				<br />
				Almost all necessary facilities and amenities are available in
				the campus which include cafeteria, shops, bank, medical unit
				with ambulances, guest house, students activity centre,
				gymnasium, computer services centre with internet facility, bus
				facility, centralized library etc.
			</p>
		</div>
		<div
			className='nit-map-div'
			style={{ paddingTop: '20px', marginLeft: '130px' }}
		>
			<iframe
				src={`https://www.google.com/maps/embed/v1/place?q=NIT%20Srinagar%2C%20Nagin%20Bagh%2C%20Srinagar
                                        &key=AIzaSyBlwkGJF1r-ncyrjWedVp6hcSR63ahNvOQ`}
				height='400px'
				width='1105px'
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
);
