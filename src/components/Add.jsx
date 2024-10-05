import React from 'react'
import Navbar from './Navbar'

const Add = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div class="card" style={{marginTop:30}}>
                        <div class="card-body">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Firstname</label>
                                        <input type="text" className="form-control" placeholder='Enter First name' />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Lastname</label>
                                        <input type="text" className="form-control" placeholder='Enter Last name' />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Purpose</label>
                                        <input type="text" className="form-control" placeholder='Enter Purpose' />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Whom to meet</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12col-lg-12 col-xl-12 col-xxl-12">
                                        <button className="btn btn-success">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add
