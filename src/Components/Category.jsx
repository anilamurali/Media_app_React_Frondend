import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { addCategories, deleteCategory, getCategoris, getParticularVedio, updateCategory } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import VedioCard from './VedioCard';


function Category() {
  //state to holde categoryName from the form
  const [categoryName, setCategoryName] = useState('')
  const [allvedios,setAllVedio]=useState([])
  //state to holde categoryName and id from the form

  const [CategoryDetails,setCategoryDetails]=useState([])

  console.log(categoryName);
  const body = {
    categoryName,
    allvedios
    
  }
  console.log(body);
  const handleAddCategory = async () => {
    // MAke Api call
    if (categoryName) {
      const response = await addCategories(body)
      console.log(response);
      toast.success("Category Added Successully")
      getCategory()
      setCategoryName("")
      handleClose()

    }
    else {
      toast.error("Cannot Add Category ")
    }
  }
  const getCategory = async () => {
    const { data } = await getCategoris()
    setCategoryDetails(data)
  

  }
  console.log(CategoryDetails);

  useEffect(() => {
    getCategory()
  }, [])

  const removeCategory = async (id)=>{
    deleteCategory(id)
    toast.error(` Category  deleted`)
    getCategory()
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dragOver =(e)=>{
    console.log("Vedio Drag over");
    e.preventDefault()

  }
  const vedioDrop=async (e,categoryId)=>{
    console.log('vedio dropped'+categoryId);
    const vedioId=e.dataTransfer.getData('vedioId')
    console.log(vedioId);

    // api call to fetch data
    const {data} =await getParticularVedio(vedioId)
    console.log(data);
    // get category details
    const selectedCategory=CategoryDetails.find(item=>item.id=== categoryId)
    console.log(selectedCategory);

    // add vedio details into the array (allvedio[])
    selectedCategory.allvedios.push(data)
    console.log(selectedCategory);

    // Make an API Call to update category details
    await updateCategory(categoryId,selectedCategory)
    getCategory()

    // 
  }
  return (
    <>
      <div>
        <Button className='btn btn-primary m-5' size='lg' onClick={handleShow}>Add New Category</Button>


        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add New Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form action="" className='border border-primary rounded p-4'>

              <FloatingLabel controlId="floatingInputGrid" label="Category Name">
                <Form.Control onChange={(e) => setCategoryName(e.target.value)} className='mb-3' type="text" placeholder="Category Name" />
              </FloatingLabel>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleAddCategory}>Add</Button>
          </Modal.Footer>
        </Modal>

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

      </div>
      <div>
        {
          CategoryDetails.length>0 ?CategoryDetails.map(item=>(
            <div onDragOver={(e)=>dragOver(e)} onDrop={(e)=>vedioDrop(e,item.id)} className='border border-1 rounded m-2 p-2'>

              <div className=' d-flex justify-content-between align-item-center '>
                <h6 className='text-white pt-2'>{item.categoryName}</h6>
                  <button onClick={()=>removeCategory(item.id)} className='btn btn-danger'>
                <i  class="fa-solid fa-trash"></i>

                  </button>
                </div>
               <Row>
                {
                  item.allvedios && item.allvedios.map(data=>(
                    <Col>
                    <VedioCard vedios={data}/>
                    </Col>
                  ))
                }
               </Row>


            </div>
          )): <p>No Data</p>
        }
      </div>
    </>
  )
}

export default Category