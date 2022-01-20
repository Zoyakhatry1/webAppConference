import React from "react";
import { Colors } from "assets/Constants/Colors";

export default () => (
    <div style={{ backgroundColor: 'white' }}>
        <div className="row title" style={{ backgroundColor: Colors.COLOR_BACKGROUND_HEADER, }} >
            <h2
                style={{
                    color: Colors.COLOR_HEADER,
                    textAlign: 'center',
                    fontWeight: '400',
                    marginBottom: '0px',
                    paddingTop: "60px",
                    paddingRight: "100px",
                    paddingLeft: "100px",
                }}
            >
                <u>Location</u>
            </h2>
        </div>
        <div className="row" >
            <p
                style={{
                    backgroundColor: '#e5e5e5',
                    textAlign: 'justify',
                    margin: '15px 220px 5px 220px',
                    fontSize: '22px',
                    margin: "0px",
                    paddingTop: "10px",
                    paddingRight: "200px",
                    paddingLeft: "200px",
                    paddingBottom: "30px",
                }}
            >
                Due to the outbreaks and continuing impacts of the COVID-19 recently, considering the safety and well-being of participants, IConIC organizing committee decide to held the conference VIRTUALLY.  We are sorry for the inconveniences caused. Your supports and collaborations are greatly appreciated.
            </p>
        </div>
    </div>
);