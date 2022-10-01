import { ElectricBolt, Wifi } from '@mui/icons-material'
import React from 'react'
import "./oneapp.css"

const OneApp = () => {
    return (
        <div className='app-container'>
            <div className="app-left">
                <h1 className='app-title'>One app.<br /> One banking.</h1>

                <div className="grid-card">
                    <div className="grid">
                        <div className="card-one">
                            <ElectricBolt />
                            <h3>Instant transactions</h3>
                            <h6>Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.</h6>
                        </div>
                        <div className="card-one">
                            <ElectricBolt />
                            <h3>Instant transactions</h3>
                            <h6>Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.</h6>
                        </div>
                        <div className="card-one">
                            <ElectricBolt />
                            <h3>Instant transactions</h3>
                            <h6>Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.</h6>
                        </div>
                        <div className="card-one">
                            <ElectricBolt />
                            <h3>Instant transactions</h3>
                            <h6>Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.</h6>
                        </div>
                        <div className="card-one">
                            <ElectricBolt />
                            <h3>Instant transactions</h3>
                            <h6>Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.</h6>
                        </div>
                        <div className="card-one">
                            <ElectricBolt />
                            <h3>Instant transactions</h3>
                            <h6>Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.</h6>
                        </div>
                    </div>

                </div>

            </div>

            <div className="app-right">
                <div className="mobile-container">
                    <div className="mobile-blance">
                        <h4>Current balance</h4>
                        <h1>$ 4.658,50</h1>

                    </div>

                    <div className="mobile-card">
                       
                        <div className='card-containeres'>

                            <div className="card-logos">
                                <h5>banquee.</h5> <Wifi />


                            </div>

                            <div className='card-numberss'>
                                <h1>1234</h1>
                                <h1>5678</h1>
                                <h1>900</h1>
                                <h1>0000</h1>

                            </div>

                            <div className='card-customer-title'>
                                <div className="card-title">
                                    <div className='johen-deo'>
                                        <h5>John Doe</h5>
                                        <h3>JCard Holder</h3>
                                    </div>

                                    <div className='expir-date'>
                                        <h5>Expiry Date</h5>
                                        <h3>09/28</h3>
                                    </div>
                                </div>

                                <div>
                                    <h1>VISA</h1>
                                </div>


                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default OneApp