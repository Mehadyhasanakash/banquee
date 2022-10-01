import { Apple, ArrowForward, ElectricBolt, Google, Home, Person, Twitter, Wifi } from '@mui/icons-material'
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
                                        <h6>John Doe</h6>
                                        <h5>JCard Holder</h5>
                                    </div>

                                    <div className='expir-dates'>
                                        <h6>Expiry Date</h6>
                                        <h5>09/28</h5>
                                    </div>
                                </div>

                                <div>
                                    <h1>VISA</h1>
                                </div>


                            </div>

                        </div>
                    </div>
                    

                    

                    {/* orther */}
                    <div className="money">
                        <div className="send-money">
                            <Person/>
                            <h3 className='money-title'>send money</h3>
                        </div>
                        <div className="send-money">
                            <Person/>
                            <h3 className='money-title'>Receive Money</h3>
                        </div>
                    </div>

                    {/* order */}
                    <div className="Transactions">
                        <div className="t-title">
                            <h3>Transactions</h3>
                        </div>
                        <div className="view">
                            <h3>View all</h3>
                            <ArrowForward/>
                        </div>
                    </div>

                    {/* order */}

                    <div className="socal-icon">
                        <div className="apple">
                        <div >
                            <Apple className='apple-logo'/>
                                                
                        </div>
                        <div>
                            <h1 className='apple-tile'>Apple </h1>
                            <h1 className='title-seeond'> Electonic</h1>

                        
                        </div>
                        </div>
                        <div className='chash'>
                            <h1>-799$</h1>
                        </div>
                        
                    </div>

                    {/* order */}
                    <div className="socal-icon">
                        <div className="apple">
                        <div >
                            <Twitter className='apple-logo'/>
                                                
                        </div>
                        <div>
                            <h1 className='apple-tile'>Twitter </h1>
                            <h1 className='title-seeond'> Ads</h1>

                        
                        </div>
                        </div>
                        <div className='chash'>
                            <h1>--9$$</h1>
                        </div>
                        
                    </div>

                    {/* order */}
                    <div className="socal-icon">
                        <div className="apple">
                        <div >
                            <Google className='apple-logo'/>
                                                
                        </div>
                        <div>
                            <h1 className='apple-tile'>Google Play Store </h1>
                            <h1 className='title-seeond'> Apps</h1>

                        
                        </div>
                        </div>
                        <div className='chash'>
                            <h1>-49$</h1>
                        </div>
                        
                    </div>
                    {/* order */}
                    <div className="socal-icon">
                        <div className="apple">
                        <div >
                            <Apple className='apple-logo'/>
                                                
                        </div>
                        <div>
                            <h1 className='apple-tile'>Amazon </h1>
                            <h1 className='title-seeond'> Shopping</h1>

                        
                        </div>
                        </div>
                        <div className='chash'>
                            <h1>-59$</h1>
                        </div>
                        
                    </div>

                    {/* order */}

                    <div className="mobile-bootem">
                            <div className="home">
                            
                            <h3 className='Hoem-title'>Home</h3>
                            <Home></Home>
                            </div>
                            <div className="home">
                            
                            <h3 className='Hoem-title'>Home</h3>
                            <Home></Home>
                            </div>
                            <div className="home">
                            
                            <h3 className='Hoem-title'>Home</h3>
                            <Home></Home>
                            </div>
                            <div className="home">
                            
                            <h3 className='Hoem-title'>Home</h3>
                            <Home></Home>
                            </div>
                           
                    </div>

                    

                </div>
                

            </div>
        </div>
    )
}

export default OneApp