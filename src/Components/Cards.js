import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row } from 'react-bootstrap';
import './Cards.css'

const Cards = () => {
  const [Data, setData] = useState([{ name: "Sunny", address: "Kochuparmbil ayiramtheng" }, { name: "Bunny", address: "Kochuparmbil ayiramtheng" }, { name: "Funny", address: "Kochuparmbil ayiramtheng" }])

  return (
    <Container>
      <div className='container'>
        <Row >
          
          {Data.map((item, index) => {
            return (

              <Card style={{ width: '18rem' }} className='card'>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title >{item.name}</Card.Title>
                  <Card.Text>
                    {item.address}
                  </Card.Text>
                  <Button variant="primary">Go profile</Button>
                </Card.Body>
              </Card>
            )
          })}


        </Row>

      </div>
    </Container>
  )
}

export default Cards
