import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Category from '../Components/Category';


function Homepage() {
  // State creation 
  const [uploadVedioServerResponse,setUploadVedioServerResponse] =useState({})

  return (
    <div>
      {/* first div  */}
      <div className="container d-flex align-items-center justify-content-between">
        <div className="add-vedios">
          <Add setUploadVedioServerResponse={setUploadVedioServerResponse} />
        </div>
        <Link to='/watch-histroy' style={{ textDecoration: 'none' }}>Watch History</Link>
      </div>
      {/* second div  */}
      <div className="container-fulid d-flex  justify-content-between col-12 sm=12 md-col-8 lg-col-8 xl-col-8">
        <div className="all-vedios">
          <h3 className='text-center my-4 text-primary'>All Vedios</h3>
          <View uploadVedioServerResponse={uploadVedioServerResponse} />
        </div>
        <div className='col-12 sm=12 md-col-4 lg-col-4 xl-col-4 m-3 border border-primary' style={{width:'400px',padding:'10px',marginTop:'100px'}}>
          <Category/>
        </div>
      </div>
    </div>
  )
}

export default Homepage