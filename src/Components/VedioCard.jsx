import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToWatchHistory, removeParticularVedio } from '../Services/allAPI';
import { toast } from 'react-toastify';

function VedioCard({vedios,setDeleteVedioStatus}) {
  console.log(vedios);

  const deleteVedio = async (id)=>{
   const response = await removeParticularVedio(id)
  setDeleteVedioStatus(true)
   toast.error("vedio deleted succesfully")
    
  }


  const dragStarted= (e,id)=>{
    console.log("darg started ",+id,e)
    e.dataTransfer.setData('vedioId',id)
  }
  
  // console.log(vedios.caption);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () => {
    setShow(true);
    // api call
    const{caption,embedLink}=vedios
    let today=new Date()
    console.log(today);
    let timestamp=new Intl.DateTimeFormat('en-us',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    console.log(timestamp);
    let vedioDetails={
      caption,
      embedLink,
      timestamp
    }
    await addToWatchHistory(vedioDetails)
  }
  return (
    <>
      
         <Card  draggable onDragStart={(e)=>dragStarted(e,vedios.id)} style={{ width: '300px' }} className='mt-2'>
            <Card.Img style={{ backgroundColor: "black" ,height:'200px' }}  onClick={handleShow} variant="top" src={vedios.url} />
            <Card.Body className='d-flex justify-content-between align-item-center'>
              <Card.Title >{vedios.caption}</Card.Title>
              <button onClick={()=>{deleteVedio(vedios.id)}} className="btn"><i class="fa-solid fa-trash"></i></button>

            </Card.Body>
          </Card>
        


         
       
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Vedio title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <iframe width="100%" height="315" src={vedios.embedLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Modal.Body>
            <Modal.Footer>
              
            </Modal.Footer>
          </Modal>

      
    </>
  )
}

export default VedioCard