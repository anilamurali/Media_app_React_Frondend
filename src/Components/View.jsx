import React, { useEffect, useState } from 'react'
import VedioCard from './VedioCard'
import { getAllVedios } from '../Services/allAPI'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const View = ({uploadVedioServerResponse}) => {

    const [allVedio, setAllVedio] = useState([])
    const [deleteVedioStatus,setDeleteVedioStatus] = useState(false)
    //api call  for displaying vidio cards
    const getUploadedVedios = async () => {
        const { data } = await getAllVedios()
        console.log(data);
        setAllVedio(data)
    }
    useEffect(() => {
        getUploadedVedios()
        setDeleteVedioStatus(false)

    }, [uploadVedioServerResponse,deleteVedioStatus])
    console.log(allVedio);
    return (
        <> {/* empty fragmet */}
            <Row >
                {
                    allVedio.length>0 ? allVedio.map((vedio)=>(
                        <Col sm={12} md={12} lg={4} xl={4} className='p-3  d-flex'>
                        <VedioCard  vedios={vedio} setDeleteVedioStatus={setDeleteVedioStatus} />
                        </Col>
                    )): <p>No Vedio Found</p>
                   
                }
            </Row>
        </>
    )
}

export default View