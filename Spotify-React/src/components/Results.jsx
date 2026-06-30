import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default function Results({data}) {
  
  return (
    <Container>
      <Row>
          {data.map((item) =>{
          const image = item?.images?.[0]?.url ?? item?.album?.images[0]?.url;
           return (
            <Col md={4} className="mb-3">
              <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title><span className="fw-bold">Name:</span>{item.name}</Card.Title>
                  <Card.Text><span className="fw-bold">Popularity:</span>{item.popularity}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )})}
      </Row>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </Container>
  )
}
