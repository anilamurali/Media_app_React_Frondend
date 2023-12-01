import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function Landingpage() {
  const navigate = useNavigate()
  return (
    <div>
      {/* First Row  */}
      <Row className='m-5'>

        <Col style={{ paddingRight: "140px" }}>
          {/* content  */}
          <h3>Welcome to <span className='text-primary'>Meadia Plater</span></h3>
          <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto vitae tenetur necessitatibus nostrum enim iure placeat
            neque repellat minima. Quidem nihil explicabo neque minima nostrum impedit vel aliquid ipsum.
            Iusto nobis nisi consequuntur similique? Placeat nulla enim cumque, cum, libero tempore,
            laboriosam obcaecati nisi sed accusantium eos totam? Repudiandae ratione asperiores distinctio est temporibus minima velit, voluptatum eveniet alias?</p>
          <button className='btn btn-primary my-4' onClick={() => navigate('/home')}>Get Started</button>
        </Col>
        <Col style={{ marginLeft: '50px' }}>
          <img style={{ width: "700px", height: "400px" }} src="https://cutewallpaper.org/21/equalizer-gif/Programming-JavaScript-Equalizer-A-webdeasy.de.gif" alt="" />
        </Col>
      </Row>
      {/* second row */}
      <Row className='m-4'>

        <h3 className='text-primary text-center m-5'>Features</h3>

        <Col style={{ marginLeft: "100px" }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img style={{ height: '250px' }} variant="top" src="https://media1.tenor.com/images/52f493bcc74deeded743cf55f25f0636/tenor.gif?itemid=5934248" />
            <Card.Body>
              <Card.Title>Managing Vedio</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>


        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img style={{ height: '250px' }} variant="top" src="https://media0.giphy.com/media/26tn7BL2UDTMVWovu/giphy-downsized.gif" />
            <Card.Body>
              <Card.Title>Categories Video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>


        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img style={{ height: '250px' }} variant="top" src="https://cdn.dribbble.com/users/154088/screenshots/770283/attachments/76374/music_player02.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* third row  */}
      <Row className='border border-1 border-primary rounded p-5 m-5'>
        <Col >
          <h3 className='text-primary  my-5'>Simple Fast and Powerful</h3>

          <h5> Play Everything</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est esse aperiam omnis
            possimus nemo! Odio sequi facilis error architecto doloremque, ipsa neque repellendus dignissimos consequatur praesentium omnis impedit sit earum.</p>

          <h5> Category Vedios</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est esse aperiam omnis
            possimus nemo! Odio sequi facilis error architecto doloremque, ipsa neque repellendus dignissimos consequatur praesentium omnis impedit sit earum.</p>

          <h5>Managing History</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est esse aperiam omnis
            possimus nemo! Odio sequi facilis error architecto doloremque, ipsa neque repellendus dignissimos consequatur praesentium omnis impedit sit earum.</p>
        </Col>
        <Col>
          <iframe width="560" height="500px" src="https://www.youtube.com/embed/IqwIOlhfCak?si=YJh0aDAc-4PjuIkH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Col>
      </Row>

    </div>
  )
}

export default Landingpage