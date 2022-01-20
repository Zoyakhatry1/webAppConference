import React from "react";

import { Colors } from "assets/Constants/Colors";
import avatar from "../../assets/img/faces/avatar.jpg";
import "./Registration.css";
export default () => (
    <div style={{ backgroundColor: 'white' }}>
        <div className="row title" style={{ backgroundColor: Colors.COLOR_BACKGROUND_HEADER }} >
            <h2
                style={{
                    color: Colors.COLOR_HEADER,
                    textAlign: 'center',
                    fontWeight: '400',
                    marginBottom: '0px',
                    paddingRight: "100px",
                    paddingLeft: "100px",
                    marginTop:"20px",
                }}
            >
                <u>Registration</u>
            </h2>
        </div>
        <div style={{ backgroundColor: "#e5e5e5", margin: "0px" }}>
            <br />
            <p
                style={{
                    textAlign: 'center',
                    fontSize: '22px',
                }}
            >
                At least one author of each accepted paper should get a full registration.
            </p>
            <div className="flex-container" style={{
                fontSize: '22px',
            }}>

                <div >
                    <h2><b>Author</b></h2>
                    <p style={{ fontSize: '22px' }}>IEEE Member: <b>$400.00</b></p>
                    <p style={{ fontSize: '22px' }}>Non Member: <b>$480.00</b></p>
                    <p style={{ fontSize: '22px' }}>IEEE Life Member: <b>$400.00</b></p>
                    <p style={{ fontSize: '22px' }}>IEEE Student Member:  <b>$400.00</b></p>
                    <p style={{ fontSize: '22px' }}>Student Non Member: <b>$480.00</b></p>
                </div>
                <div >
                    <h2><b>Non-Author</b></h2>
                    <p style={{ fontSize: '22px' }}>IEEE Member: <b>$400.00</b></p>
                    <p style={{ fontSize: '22px' }}>Non Member: <b>$480.00</b></p>
                    <p style={{ fontSize: '22px' }}>IEEE Life Member: <b>$400.00</b></p>
                    <p style={{ fontSize: '22px' }}>IEEE Student Member:  <b>$400.00</b></p>
                    <p style={{ fontSize: '22px' }}>Student Non Member: <b>$480.00</b></p>
                </div>
            </div>
            <p style={{
                textAlign: 'center',
                margin: '15px 220px 5px 220px',
                fontSize: '22px',
                margin: "0px",
                paddingTop: "40px",
                paddingRight: "200px",
                paddingLeft: "200px",
                paddingBottom: "30px",
            }}>
                The presenting author(s) must register to the conference before submitting the final paper. Note that even if the presenter is a student, he/she must pay a Full Registration. A paper not registered by the deadline will not be included in the proceedings of the conference. Every author can have an extra page at a cost of $100.00 each.
                <br />
                <br />
                <b>
                    IMPORTANT NOTE: Payments using wire transfer require an extra fee that is up to the author to pay. Authors who will use wire transfer for a payment method are advised to email a copy of the receipt to the Financial Char of the conference as well as make sure that the transfer will be complete before the start date of the conference. Any incomplete wire transfers will be subjected to removal of the paper from the proceedings.
                </b>
            </p>
        </div>
        <div className="row" style={{ backgroundColor: Colors.COLOR_BACKGROUND_HEADER, margin: "0px", }} >
            <h2
                style={{
                    color: Colors.COLOR_HEADER,
                    textAlign: 'center',
                    fontWeight: '400',
                    marginBottom: '0px',
                    margin: "0px",
                    paddingTop: "40px",
                    paddingRight: "100px",
                    paddingLeft: "100px",
                    paddingBottom: "25px",
                }}
            >
                <u style={{ color: Colors.COLOR_HEADER }}>Registration Fees</u>
            </h2>
        </div>
        <div style={{ backgroundColor: "#e5e5e5" }}>
            <div id="table-container">
                <table align="center" id="imp-dates">
                    <tbody><tr>
                        <td className="hh3" rowspan="2" >Student Registration<br />(for Virtual Participation)</td>
                        <td className="hh4">IEEE/CSI Member</td>
                        <td className="hh4" id="amount">₹4000</td>
                    </tr>
                        <tr>
                            <td className="hh4">Others</td>
                            <td className="hh4" id="amount">₹5000</td>
                        </tr>

                        <tr>
                            <td className="hh3" rowspan="2" >Student Registration<br />(for Offline Participation)</td>
                            <td className="hh4">IEEE/CSI Member</td>
                            <td className="hh4" id="amount">₹5000</td>
                        </tr>
                        <tr>
                            <td className="hh4">Others</td>
                            <td className="hh4" id="amount">₹6000</td>
                        </tr>

                        <tr>
                            <td className="hh3" rowspan="2" >Faculty Registration</td>
                            <td className="hh4">IEEE/CSI Member</td>
                            <td className="hh4" id="amount">₹7500</td>
                        </tr>
                        <tr>
                            <td className="hh4">Others</td>
                            <td className="hh4" id="amount">₹9000</td>
                        </tr>

                        <tr>
                            <td className="hh3" rowspan="2" >Industry Member</td>
                            <td className="hh4">IEEE/CSI Member</td>
                            <td className="hh4" id="amount">₹9000</td>
                        </tr>
                        <tr>
                            <td className="hh4">Others</td>
                            <td className="hh4" id="amount">₹11000</td>
                        </tr>

                        <tr>
                            <td className="hh3" rowspan="2" >International Registration</td>
                            <td className="hh4">IEEE/CSI Member</td>
                            <td className="hh4" id="amount">$300</td>
                        </tr>
                        <tr>
                            <td className="hh4">Others</td>
                            <td className="hh4" id="amount">$350</td>
                        </tr>

                        <tr>
                            <td className="hh3" rowspan="2" >Attendee</td>
                            <td className="hh4">-</td>
                            <td className="hh4" id="amount">₹1000</td>
                        </tr>

                    </tbody></table>
            </div>
        </div>
        <div className="row" style={{ backgroundColor: Colors.COLOR_BACKGROUND_HEADER, margin: "0px", }} >
            <h2
                style={{
                    color: Colors.COLOR_HEADER,
                    textAlign: 'center',
                    fontWeight: '400',
                    marginBottom: '0px',
                    margin: "0px",
                    paddingTop: "40px",
                    paddingRight: "100px",
                    paddingLeft: "100px",
                    paddingBottom: "25px",
                }}
            >
                <u style={{ color: Colors.COLOR_HEADER }}>Registration Link</u>
            </h2>
        </div>
        <div style={{ backgroundColor: "#e5e5e5", margin: "0px" }}>
            <p style={{
                margin: '15px 220px 5px 220px',
                fontSize: '22px',
                margin: "0px",
                paddingTop: "40px",
                paddingRight: "200px",
                paddingLeft: "200px",
                paddingBottom: "30px",
            }}>
                <b>Registration link:  </b><a href="https://cvent.me/m7q7Ma">https://cvent.me/m7q7Ma</a><br />
                <b>To modify your registration, click:  </b><a href="https://cvent.me/m7q7Ma">https://cvent.me/m7q7Ma</a><br />
                <b>Please email </b> <a href="mailto:registration+ICTAI@computer.org">registration+ICTAI@computer.org </a> <b>if you need any registration assistance.</b><br />
                <b>Please contact   </b> <a href="mailto:nikolaos.bourbakis@wright.edu">nikolaos.bourbakis@wright.edu </a> <b>  (CC alexiou.2@wright.edu) for questions regarding author submissions. </b><br />
            </p>
            <br />
            <p style={{
                fontSize: '22px',
                margin: "0px",
                paddingRight: "200px",
                paddingLeft: "200px",
                paddingBottom: "30px",
            }}>
                Please note the following:
                <ul>
                    <li>All deadlines in Cvent are set to 11:59 PM Eastern Time Zone (GMT -5:00).</li>
                    <li>CC: <a href="mailto:registration+ICTAI@computer.org">registration+ICTAI@computer.org</a>for all registration inquiries/questions</li>
                    
                </ul>
            </p>
            <p style={{
                fontSize: '22px',
                margin: "0px",
                paddingRight: "200px",
                paddingLeft: "200px",
                paddingBottom: "30px",
            }}>
                One <u>Important Note</u> is that Author Registration requires the paper ID from easychair.
            </p>
        </div>
    </div>
);