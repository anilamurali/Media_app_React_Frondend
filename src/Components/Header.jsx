import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';


function Header() {
  return (
    <div>
      <MDBNavbar light bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className='text-primary fw-bolder'>
          <i class="fa-solid fa-cloud-arrow-up fa-beat-fade m-3 text-"></i>
            Meadia Player
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header