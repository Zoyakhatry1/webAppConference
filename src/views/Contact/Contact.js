import React from 'react';

export default () => (
	<div>
		<div
			id='reach-us'
			style={{ background: '#e6e9ed', width: '100%', marginTop: '80px' }}
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
						<p className='hh5' style={{ fontWeight: 'bold' }}>
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
								For Registration related problems, contact:{' '}
							</h5>
							Dr. Ranjeet K. Rout:{' '}
							<span
								id='contact'
								style={{ textDecoration: 'underline' }}
							>
								{' '}
								+91-8917595990
							</span>
							<h5>For Submission related problems, contact: </h5>
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
				<div className='nit-map-div' style={{ paddingTop: '0px' }}>
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
);
