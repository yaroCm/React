import { Credentials } from "./credentials";

export const getSearch = async (value,type) => {
    const spotify = Credentials();  

    const body = new URLSearchParams();
    body.append('grant_type', 'client_credentials');

    const url = `https://api.spotify.com/v1/search?q=${value}&type=${type}&limit=5`;

    const responseToken= await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(`${spotify.ClientId}:${spotify.ClientSecret}`)
      },
      body: body.toString()
    });
     const token  = await responseToken.json();

     const resp= await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token.access_token
        }
     });

     const data  = await resp.json();

     if(data.tracks) return  data.tracks.items;
     if(data.artists) return  data.artists.items;
     if(data.albums) return  data.albums.items;
}