import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { getWatchHistory } from '../Services/allAPI';


function WatchHistory() {
  const [WatchHistory, setWatchHistory] = useState([])
  const getAllWatchHistory = async () => {
    const { data } = await getWatchHistory()
    console.log(data);
    setWatchHistory(data)

  }
  console.log(WatchHistory);
  useEffect(() => {
    getAllWatchHistory()
  }, [])

  return (
    <>
      <div className='d-flex justify-content-between align-items-center '>
        <h3 className='text-primary'>Watch History</h3>
        <Link to={'/home'} style={{ textDecoration: 'none' }}>
          <p className='me-5'><i class="fa-solid fa-backward fa-fade me-3"></i> Back to home</p>
        </Link>
      </div>
      <div className='container'>
        <Table bordered hover className='my-5 p-5'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {
              WatchHistory.length > 0 ? WatchHistory.map((history) => (
                <tr>
                  <td>{history.id}</td>
                  <td>{history.caption}</td>
                  <td><Link to={history.embedLink}>{history.embedLink}</Link></td>
                  <td>{history.timestamp}</td>
                </tr>
              )) : <tr>
                <td>0</td>
                <td>null</td>
                <td>nul</td>
                <td>null</td>
              </tr>
            }
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default WatchHistory