import React from 'react'
import { Col, Form } from 'react-bootstrap'

export default function SearchForm({artist,setArtist,track,setTrack,album,setAlbum}) {


  return (
    <Col md={12} className='p-5'>
      <div className="p-4 border rounded shadow">
        <Form id="form">
          <Form.Group className="mb-3" >
            <Form.Control 
              type="text" 
              placeholder="Artist" 
              value={artist} 
              name='artist'
              id='artist'
              onChange={(e)=>setArtist(e.target.value)}
              />
          </Form.Group>

          <Form.Group className="mb-3" >
           <Form.Control 
              type="text" 
              placeholder="Track" 
              value={track} 
              name='track'
              id='track'
              onChange={(e)=>setTrack(e.target.value)}
              />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Control 
              type="text" 
              placeholder="Album" 
              value={album} 
              name='album'
              id='album'
              onChange={(e)=>setAlbum(e.target.value)}
              />
          </Form.Group>

        </Form>
      </div>
    </Col>
  )
}
