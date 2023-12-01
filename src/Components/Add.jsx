import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { uploadVideo } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setUploadVedioServerResponse}) {
  

  const [vedio, setVedio] = useState({

    id: "",
    caption: "",
    url: "",
    embedLink: ""
  })
  console.log(vedio);
  const getEmbedLink = (e) => {
    const { value } = e.target
    console.log(value.slice(-31));
    const link = `https://www.youtube.com/embed/${value.slice(-31)}`
    setVedio({ ...vedio, embedLink: link })
  }
  // to upload vedio
  const handleUpload = async () => {
    const {id,caption,url,embedLink}=vedio
    if (!id|| !caption || !url || !embedLink) {
      toast.error("Please fill all field")
      
    }
    else{
      //  make an api call 
      const response = await uploadVideo(vedio)
      console.log(response);
      if (response.status >=200 && response.status <=300) {
        // set server response
        setUploadVedioServerResponse(response.data)
        toast.success(`${response.data.caption} added successfully`)
        setVedio({
          id:"",
          caption:"",
          url:"",
          embedLink:""
        })
        handleClose()
      }
      else{
        toast.warning("Please provide unique id")
      }

    }
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container d-flex mt-5">
        <h5>Upload New Vedio</h5>
        <button onClick={handleShow} className='btn'><i class="fa-solid fa-circle-plus fa-beat fs-4 "></i></button>

        {/* modal  */}
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" />
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Upload vedio</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Please fill following details</p>
            <form action="" className='border border-primary rounded p-4'>

              <FloatingLabel controlId="floatingInputGrid" label="Vedio Id">
                <Form.Control
                  onChange={(e) => setVedio({ ...vedio, id: e.target.value })}
                  className='= mb-3' type="text" placeholder="Vedio Id" />
              </FloatingLabel>

              <FloatingLabel controlId="floatingInputGrid" label="Vedio Caption">
                <Form.Control onChange={(e) => setVedio({ ...vedio, caption: e.target.value })} className='mb-3' type="text" placeholder="Vedio Caption" />
              </FloatingLabel>

              <FloatingLabel controlId="floatingInputGrid" label="Vedio Image URL">
                <Form.Control onChange={(e) => setVedio({ ...vedio, url: e.target.value })} className=' mb-3' type="text" placeholder="Vedio Image URL" />
              </FloatingLabel>

              <FloatingLabel controlId="floatingInputGrid" label="Youtube Link">
                <Form.Control
                  onChange={getEmbedLink}
                  className=' ' type="text" placeholder="Youtube Link" />
              </FloatingLabel>

            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleUpload}>Upload</Button>
           
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default Add