import './App.css';
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import { getSearch } from './helpers/getSearch';

function App() {
  

  const [artist, setArtist] = useState('');
  const [track, setTrack] = useState('');
  const [album, setAlbum] = useState('');
  const [data, setData] = useState();

  
  const searchSetter= (data)=>{
      setData(data);
  }
  
  useEffect(() => {
    
    if(!artist && !track && !album) return;

    const fetch = async ()=>{
      if(artist) searchSetter(await getSearch(artist,'artist')) ;
      if(track) searchSetter(await getSearch(track,'track')) ;
      if(album) searchSetter(await getSearch(album,'album')) ;
    }
    
    fetch();
     

  }, [artist,track,album]);

  return (
    <>
      <Container>
        <Row>
          <SearchForm 
            artist={artist} 
            setArtist={setArtist}
            track={track} 
            setTrack={setTrack}
            album={album} 
            setAlbum={setAlbum}/>
           {data && <Results data={data}/>}
        </Row>
      </Container>
    </>
    
  );
}

export default App;
