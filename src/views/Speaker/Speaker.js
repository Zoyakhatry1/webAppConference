import React from 'react';

import { Colors } from 'assets/Constants/Colors';
import './Speaker.css';

//Speaker Images
import avatar from '../../assets/img/faces/asari-vijayan.jpg';
import michele from '../../assets/img/faces/michele-nappi.jpg';
import khurram from '../../assets/img/faces/khurram-khan.png';
import hafizul from '../../assets/img/faces/hafizul.jpg';
import iqbal from '../../assets/img/faces/iqbal-ahamed.jpg';
import amir from '../../assets/img/faces/amir-gandomi.jpg';

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
					paddingTop: '60px',
					paddingRight: '100px',
					paddingLeft: '100px',
				}}
			>
				<u>Keynote Speakers</u>
			</h2>
		</div>
		<div className='row'>
			<div
				style={{
					backgroundColor: '#e5e5e5',
					textAlign: 'left',
					margin: '15px 220px 5px 220px',
					fontSize: '22px',
					margin: '0px',
					padding: '20px 100px 0px 100px',
				}}
			>
				<div className='div-sep'>
					<div style={{ paddingRight: '50px' }}>
						<img
							src={avatar}
							style={{ width: '300px', height: '350px' }}
						/>
						<br />
						<br />
						<p
							style={{
								marginTop: '-30px',
								textAlign: 'center',
								fontSize: '20px',
							}}
						>
							Dr. Vijayan Asari
						</p>
					</div>
					<div style={{ paddingLeft: '30px' }}>
						<p style={{ fontSize: '15px', fontWeight: '900' }}>
							Dr. Vijayan Asari graduated from University of
							Kerala in 1978 in Electronics and Communications
							Engineering He received M. Tech and Ph.D. in
							Electrical Engineering in 1984 and 1994 respectively
							from Indian Institute of Technology, Madras.
							Currently Dr. Vijayan Asari is the University of
							Dayton Ohio Research Scholars Endowed Chair in Wide
							Area Surveillance and a professor with the
							Department of Electrical and Computer Engineering.
							He is also the director of the Centre of Excellence
							for Computational Intelligence and Machine Vision
							(Vision Lab). In 1996, he joined the National
							University of Singapore as a Research Fellow and led
							a team for the development of a vision-guided
							microrobotic endoscopy system. In 1998, he joined
							the School of Computer Engineering at Nanyang
							Technological University (NTU), Singapore, and led
							the computer vision and image processing research
							activities in the Centre for High Performance
							Embedded Systems at NTU. In August 2000, Dr. Asari
							joined the Department of Electrical and Computer
							Engineering at Old Dominion University (ODU) where
							he was also the founding director of the
							Computational Intelligence and Machine Vision
							Laboratory. He has received many awards for his
							teaching, research and leadership including the
							Vision Award for Excellence in August 2017, Sigma Xi
							George B. Noland Award in April 2016, and the
							Outstanding Engineers and Scientists Award for
							Technical Leadership in April 2015. Dr. Asari has
							been selected as a Fulbright Specialist by the
							Fulbright Specialist Program of the U.S. Department
							of State’s Bureau of Educational and Cultural
							Affairs (ECA) and World Learning in August 2017. He
							was elected as a Fellow of SPIE (Society of
							Photo-Optical Instrumentation Engineers) in November
							2018. Dr. Asari has published, and co-authored with
							his graduate students and colleagues, more than 600
							research articles, including an edited book on wide
							area surveillance and more than 100 peer-reviewed
							journal papers, in the areas of image processing,
							computer vision, pattern recognition, machine
							learning, deep learning and high-performance digital
							system architecture design.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div className='row'>
			<div
				style={{
					backgroundColor: '#e5e5e5',
					textAlign: 'left',
					margin: '15px 220px 5px 220px',
					fontSize: '22px',
					margin: '0px',
					padding: '20px 100px 0px 100px',
				}}
			>
				<div className='div-sep'>
					<div style={{ paddingRight: '50px' }}>
						<img
							src={michele}
							style={{ width: '300px', height: '350px' }}
						/>
						<br />
						<br />
						<p
							style={{
								marginTop: '-30px',
								textAlign: 'center',
								fontSize: '20px',
							}}
						>
							Michele Nappi
						</p>
					</div>
					<div style={{ paddingLeft: '30px' }}>
						<p style={{ fontSize: '15px', fontWeight: '900' }}>
							Michele Nappi received laurea degree (cum laude) in
							Computer Science from the University of Salerno,
							Italy, in 1991, the M.SC. degree in Information and
							Communication Technology from I.I.A.S.S. &quot;E.R.
							Caianiello,&quot; in 1997, and the Ph.D. degree in
							Applied Mathematics and Computer Science from the
							University of Padova, Italy, in 1997. He is
							currently a professor of Computer Science at the
							University of Salerno. Author of more than 180
							papers in peer review international journals,
							international conferences and book chapters, He is
							co-editor of several international books. His
							research interests include pattern recognition,
							image processing, image compression and indexing,
							multimedia databases and biometrics, human computer
							interaction. Dr. Nappi serves as associate editor
							and managing guest editor for several international
							journals. He is also member of tpc of international
							conferences. He is team leader of the Biometric and
							Image Processing Lab (BIPLAB) and received several
							international awards for scientific and research
							activities. He has been the President of the Italian
							Chapter of the IEEE Biometrics Council. In 2014 He
							was one of the founders of the spin off BS3
							(biometric system for security and safety).
						</p>
					</div>
				</div>
			</div>
		</div>
		<div className='row'>
			<div
				style={{
					backgroundColor: '#e5e5e5',
					textAlign: 'left',
					margin: '15px 220px 5px 220px',
					fontSize: '22px',
					margin: '0px',
					padding: '20px 100px 0px 100px',
				}}
			>
				<div className='div-sep'>
					<div style={{ paddingRight: '50px' }}>
						<img
							src={khurram}
							style={{ width: '300px', height: '350px' }}
						/>
						<br />
						<br />
						<p
							style={{
								marginTop: '-30px',
								textAlign: 'center',
								fontSize: '20px',
							}}
						>
							Prof. Muhammad Khurram Khan
						</p>
					</div>
					<div style={{ paddingLeft: '30px' }}>
						<p style={{ fontSize: '15px', fontWeight: '900' }}>
							Prof. Muhammad Khurram Khan is a global thought
							leader and influencer in Cybersecurity. He is the
							founder and CEO of the ‘Global Foundation for Cyber
							Studies and Research’ (http://www.gfcyber.org),
							which is an independent and non- partisan
							cybersecurity think-tank based in Washington D.C. He
							has contributed cyber policy works for the G20 in
							shaping a safer cyberspace for children, protection
							of masses in the cyberspace, and empowering and
							enabling women in cybersecurity profession. He is a
							Professor at Center of Excellence in Information
							Assurance (CoEIA), King Saud University, Kingdom of
							Saudi Arabia. He is one of the founding members of
							CoEIA and has served as the Manager R&amp;D from
							March 2009 to March 2012. He developed and
							successfully managed the research program of CoEIA,
							which transformed the center as one of the best
							centers of research excellence in Saudi Arabia as
							well as in the region. Prof. Khurram is the
							Editor-in-Chief of a well- esteemed international
							journal &#39;Telecommunication Systems&#39;
							published by Springer- Nature (since 1993) with an
							impact factor of 2.314 (JCR 2021). He is also the
							Editor- in-Chief of Cyber Insights Magazine
							(http://wwww.cyber-insights.org).Furthermore, he is
							the full-time Editor/Associate Editor of several
							international journals/magazines, including IEEE
							Communications Surveys &amp; Tutorials, IEEE
							Communications Magazine, IEEE Internet of Things
							Journal etc. Prof. Khurram is an adjunct professor
							at Fujian University of Technology, China and an
							honorary Professor at IIIRC, Shenzhen Graduate
							School, Harbin Institute of Technology, China. He
							has secured an outstanding leadership award at IEEE
							international conference on Networks and Systems
							Security 2009, Australia. He has been awarded a Gold
							Medal for the &#39;Best Invention &amp; Innovation
							Award&#39; at 10th Malaysian Technology Expo 2011,
							Malaysia. Prof. Khurram is the recipient of King
							Saud University Award for Scientific Excellence
							(Research Productivity) in May 2015. He is also a
							recipient of King Saud University Award for
							Scientific Excellence (Inventions, Innovations, and
							Technology Licensing) in May 2016. Prof. Khurram has
							published over 400 research papers in the journals
							and conferences of international repute. In
							addition, he is an inventor of 10 US/PCT patents. He
							has edited 7 books/proceedings published by
							Springer-Verlag and IEEE. He has secured several
							national and international research grants in the
							domain of information security. His research areas
							of interest are Cybersecurity, digital
							authentication, biometrics, multimedia security, and
							technological innovation management. Prof. Khurram
							has played a leading role in developing &#39;BS
							Cybersecurity Degree Program&#39; and &#39;Higher
							Diploma in Cybersecurity&#39; at King Saud
							University. In 2019, he has played an instrumental
							role as a cybersecurity subject expert for a USD 6
							Million series B investment in a South Korean
							startup ‘SecuLetter’, which has received a corporate
							valuation of USD 40 Million.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div className='row'>
			<div
				style={{
					backgroundColor: '#e5e5e5',
					textAlign: 'left',
					margin: '15px 220px 5px 220px',
					fontSize: '22px',
					margin: '0px',
					padding: '20px 100px 0px 100px',
				}}
			>
				<div className='div-sep'>
					<div style={{ paddingRight: '50px' }}>
						<img
							src={hafizul}
							style={{ width: '300px', height: '350px' }}
						/>
						<br />
						<br />
						<p
							style={{
								marginTop: '-30px',
								textAlign: 'center',
								fontSize: '20px',
							}}
						>
							SK Hafizul Islam
						</p>
					</div>
					<div style={{ paddingLeft: '30px' }}>
						<p style={{ fontSize: '15px', fontWeight: '900' }}>
							SK Hafizul Islam received the M.Sc. degree in
							Applied Mathematics from Vidyasagar University,
							Midnapore, India, in 2006, and the M.Tech. degree in
							Computer Application and the Ph.D. degree in
							Computer Science and Engineering in 2009 and 2013,
							respectively, from Indian Institute of Technology
							[IIT (ISM)] Dhanbad, Jharkhand, India. He is
							currently an Assistant Professor in the Department
							of Computer Science and Engineering, Indian
							Institute of Information Technology Kalyani (IIIT
							Kalyani), West Bengal, India. Before joining the
							IIIT Kalyani, he was an Assistant Professor with the
							Department of Computer Science and Information
							Systems, Birla Institute of Technology and Science,
							Pilani (BITS Pilani), Rajasthan, India. He has more
							than eight years of teaching and eleven years of
							research experience. He has authored or coauthored
							125 research papers in journals and conference
							proceedings of international reputes. His research
							interests include cryptography, information
							security, WSNs, IoT, and cloud computing. He is
							an Associate Editor for “IEEE Journal of Biomedical
							and Health Informatics” “IEEE Transactions on
							Intelligent Transportation Systems”, “IEEE
							Access”, “International Journal of Communication
							Systems (Wiley)”, &quot;Telecommunication Systems
							(Springer)&quot;, &quot;IET Wireless Sensor
							Systems&quot;, “Security and Privacy
							(Wiley)”, &quot;Array- Journal (Elsevier)&quot;,
							and Technical Committee Member, Computer
							Communications (Elsevier). He was a reviewer in many
							reputed international journals and conferences. He
							is a senior member of IEEE and a member of ACM. He
							was the recipient of the University Gold Medal,
							the S. D. Singha Memorial Endowment Gold Medal, and
							the Sabitri Parya Memorial Endowment Gold
							Medal from Vidyasagar University, in 2006. He was
							also the recipient of the University Gold Medal from
							IIT(ISM) Dhanbad in 2009 and the OPERA
							award from BITS Pilani in 2015.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div className='row'>
			<div
				style={{
					backgroundColor: '#e5e5e5',
					textAlign: 'left',
					margin: '15px 220px 5px 220px',
					fontSize: '22px',
					margin: '0px',
					padding: '20px 100px 0px 100px',
				}}
			>
				<div className='div-sep'>
					<div style={{ paddingRight: '50px' }}>
						<img
							src={iqbal}
							style={{ width: '300px', height: '350px' }}
						/>
						<br />
						<br />
						<p
							style={{
								marginTop: '-30px',
								textAlign: 'center',
								fontSize: '20px',
							}}
						>
							Sheikh Iqbal Ahamed
						</p>
					</div>
					<div style={{ paddingLeft: '30px' }}>
						<p style={{ fontSize: '15px', fontWeight: '900' }}>
							Sheikh Iqbal Ahamed is Professor and Chair at the
							Department of Computer Science and Director of the
							Ubicomp Research Lab. He received his PhD in
							Computer Science from the Arizona State University
							in 2003.  Dr. Ahamed has a strong performance record
							in research, with a career record of over $1 million
							in external research funding. His current projects
							cover a number of state-of-the-art advances in
							medical computing and mobile computing. Dr.
							Ahamed&#39;s research work focuses on building
							customized and innovative patient communication
							methods through technology, developing new and
							innovative approaches for health monitoring, pain
							management, mapping technologies, and activity
							monitoring for smartphones. He has worked with
							hospitals in the U.S. and internationally on a
							number of projects, as well as with leading
							healthcare companies in the healthcare industry. Dr.
							Ahamed has worked with a number of engineers,
							nurses, and physicians on 20 healthcare grants over
							the past 13 years. Projects included work with
							cellphones, sensors, tablets, web applications, and
							HIPAA compliant cloud servers. His experience
							extends to working with patient populations in
							American Indian and Hispanic communities. Dr. Ahamed
							is a Senior Member of the IEEE Computer Society, a
							Member of the Association for Computing Machinery,
							Member of the Internet Society, as well as Gamma
							Beta Phi and Upsilon Pi Upsilon. He is the Steering
							Committee Chair of IEEE COMPSAC, the Computer
							Society&#39;s signature international computing
							conference. He serves on a number of committees at
							the department, university, and professional levels.
							In recognition of his high-quality research work,
							Dr. Ahamed and his students and co-authors have
							received 10 best paper/poster awards at conferences
							and workshops in the past 5 years. He was awarded
							the Way-Klinger Young Scholars Award in 2008. He was
							invited as research faculty to Microsoft in Seattle
							in 2005, 2006, 2007, and 2008. He also was a 2006
							recipient of a 3M Faculty Development Award. Dr.
							Ahamed is Co-founder of Ubitrix, a technology
							transfer company that develops mobile applications
							for a number of uses, including healthcare
							communication, speech therapy, pallative care, as
							well as marketing, fitness tracking, embedded
							systems and location-based services.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div className='row'>
			<div
				style={{
					backgroundColor: '#e5e5e5',
					textAlign: 'left',
					margin: '15px 220px 5px 220px',
					fontSize: '22px',
					margin: '0px',
					padding: '20px 100px 0px 100px',
				}}
			>
				<div className='div-sep'>
					<div style={{ paddingRight: '50px' }}>
						<img
							src={amir}
							style={{ width: '300px', height: '350px' }}
						/>
						<br />
						<br />
						<p
							style={{
								marginTop: '-30px',
								textAlign: 'center',
								fontSize: '20px',
							}}
						>
							Amir H. Gandomi
						</p>
					</div>
					<div style={{ paddingLeft: '30px' }}>
						<p style={{ fontSize: '15px', fontWeight: '900' }}>
							Amir H. Gandomi is a Professor of Data Science and
							an ARC DECRA Fellow at the Faculty of Engineering
							&amp; Information Technology, University of
							Technology Sydney. Prior to joining UTS, Prof.
							Gandomi was an Assistant Professor at Stevens
							Institute of Technology, USA and a distinguished
							research fellow in BEACON center, Michigan State
							University, USA. Prof. Gandomi has published over
							two hundred journal papers and seven books which
							collectively have been cited 24,000+ times (H-index
							= 72). He has been named as one of the most
							influential scientific mind and Highly Cited
							Researcher (top 1% publications and 0.1%
							researchers) for four consecutive years, 2017 to
							2021 by Web of Science. He also ranked 18th in GP
							bibliography among more than 12,000 researchers. He
							has served as associate editor, editor and guest
							editor in several prestigious journals such as AE of
							IEEE TBD and IEEE IoTJ. Prof Gandomi is active in
							delivering keynotes and invited talks. His research
							interests are global optimisation and (big) data
							analytics using machine learning and evolutionary
							computations in particular.
						</p>
					</div>
				</div>
			</div>
		</div>
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
					paddingTop: '0px',
					paddingRight: '100px',
					paddingLeft: '100px',
				}}
			>
				<u>Plenary Session Speakers</u>
			</h2>
		</div>
		<div className='row'>
			<div
				style={{
					backgroundColor: '#e5e5e5',
					textAlign: 'left',
					margin: '15px 220px 5px 220px',
					fontSize: '22px',
					margin: '0px',
					padding: '20px 100px 0px 100px',
				}}
			>
				<div className='div-sep'>
					<div style={{ paddingRight: '50px' }}>
						<img
							src={avatar}
							style={{ width: '300px', height: '350px' }}
						/>
						<br />
						<br />
						<p
							style={{
								marginTop: '-30px',
								textAlign: 'center',
								fontSize: '20px',
							}}
						>
							Dr. Korhan Cengiz
						</p>
					</div>
					<div style={{ paddingLeft: '30px' }}>
						<p style={{ fontSize: '15px', fontWeight: '900' }}>
							Korhan Cengiz, PhD, SMIEEE was born in Edirne,
							Turkey, in 1986. He received the BS degrees in
							Electronics and Communication Engineering from
							Kocaeli University, Turkey and Business
							Administration from Anadolu University, Turkey in
							2008 and 2009 respectively. He took his MS degree in
							Electronics and Communication Engineering from Namik
							Kemal University, Turkey in 2011, and the PhD degree
							in Electronics Engineering from Kadir Has
							University, Turkey in 2016. Since 2018, he has been
							an Assistant Professor with the
							Electrical-Electronics Engineering Department,
							Trakya University, Turkey. He is the author of over
							40 articles including IEEE Internet of Things
							Journal, IEEE Access, Expert Systems with
							Applications and Knowledge Based Systems, 3 book
							chapters, 2 international patents and 1 book in
							Turkish. His research interests include wireless
							sensor networks, wireless communications,
							statistical signal processing, indoor positioning
							systems, power electronics and 5G. He is Associate
							Editor of Interdisciplinary Sciences: Computational
							Life Sciences, Springer, Handling Editor of
							Microprocessors and Microsystems, Elsevier,
							Associate Editor of IET Electronics Letters, IET
							Networks and Editor of AEÜ - International Journal
							of Electronics and Communications, Elsevier. He has
							Guest Editorial Positions in IEEE Internet of Things
							Magazine and CMC-Computers, Materials & Continua. He
							serves several reviewer positions for IEEE Internet
							of Things Journal, IEEE Sensors Journal and IEEE
							Access. He serves several book editorial positions
							in Springer, Elsevier, Wiley and CRC. He presented
							10+ keynote talks in reputed IEEE and Springer
							Conferences about WSNs, IoT and 5G. He is Senior
							Member, IEEE since August 2020. Dr. Cengiz's awards
							and honors include the Tubitak Priority Areas Ph.D.
							Scholarship, the Kadir Has University Ph.D. Student
							Scholarship, best presentation award in ICAT 2016
							Conference and best paper award in ICAT 2018
							Conference.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div className='row'>
			<div
				style={{
					backgroundColor: '#e5e5e5',
					textAlign: 'left',
					margin: '15px 220px 5px 220px',
					fontSize: '22px',
					margin: '0px',
					padding: '20px 100px 0px 100px',
				}}
			>
				<div className='div-sep'>
					<div style={{ paddingRight: '50px' }}>
						<img
							src={avatar}
							style={{ width: '300px', height: '350px' }}
						/>
						<br />
						<br />
						<p
							style={{
								marginTop: '-30px',
								textAlign: 'center',
								fontSize: '20px',
							}}
						>
							Dr. Korhan Cengiz
						</p>
					</div>
					<div style={{ paddingLeft: '30px' }}>
						<p style={{ fontSize: '15px', fontWeight: '900' }}>
							Korhan Cengiz, PhD, SMIEEE was born in Edirne,
							Turkey, in 1986. He received the BS degrees in
							Electronics and Communication Engineering from
							Kocaeli University, Turkey and Business
							Administration from Anadolu University, Turkey in
							2008 and 2009 respectively. He took his MS degree in
							Electronics and Communication Engineering from Namik
							Kemal University, Turkey in 2011, and the PhD degree
							in Electronics Engineering from Kadir Has
							University, Turkey in 2016. Since 2018, he has been
							an Assistant Professor with the
							Electrical-Electronics Engineering Department,
							Trakya University, Turkey. He is the author of over
							40 articles including IEEE Internet of Things
							Journal, IEEE Access, Expert Systems with
							Applications and Knowledge Based Systems, 3 book
							chapters, 2 international patents and 1 book in
							Turkish. His research interests include wireless
							sensor networks, wireless communications,
							statistical signal processing, indoor positioning
							systems, power electronics and 5G. He is Associate
							Editor of Interdisciplinary Sciences: Computational
							Life Sciences, Springer, Handling Editor of
							Microprocessors and Microsystems, Elsevier,
							Associate Editor of IET Electronics Letters, IET
							Networks and Editor of AEÜ - International Journal
							of Electronics and Communications, Elsevier. He has
							Guest Editorial Positions in IEEE Internet of Things
							Magazine and CMC-Computers, Materials & Continua. He
							serves several reviewer positions for IEEE Internet
							of Things Journal, IEEE Sensors Journal and IEEE
							Access. He serves several book editorial positions
							in Springer, Elsevier, Wiley and CRC. He presented
							10+ keynote talks in reputed IEEE and Springer
							Conferences about WSNs, IoT and 5G. He is Senior
							Member, IEEE since August 2020. Dr. Cengiz's awards
							and honors include the Tubitak Priority Areas Ph.D.
							Scholarship, the Kadir Has University Ph.D. Student
							Scholarship, best presentation award in ICAT 2016
							Conference and best paper award in ICAT 2018
							Conference.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);
