import React, { useEffect, useState } from "react"; 
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import spotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

//connecting spotify to react
const spotify = new spotifyWebApi();

function App() {

//if we need to pull something from the data layer we use - {}(object)
const [{ user, token },dispatch] = useDataLayerValue();//destructuring is used here {user}
  //it's like [dataLayer,dispatch]
  //dataLayer.user
  //run code based on a given condition useEffect
  useEffect(()=> {
    const hash = getTokenFromUrl();
    window.location.hash = ""; //to clear the access token from url

    const _token = hash.access_token;

    if(_token) {

      dispatch({
        type:"SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
     
        dispatch({
          type:"SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
      dispatch ({
        type:"SET_PLAYLISTS",
        playlists:playlists,
      });
    });
    spotify.getPlaylist('37i9dQZEVXcCwClZ0PZmzL').then(response =>
      dispatch({
      type:"SET_DISCOVER_WEEKLY",
      discover_weekly:response,

    })
  );
    } 
    //console.log("I HAVE A TOKEN HERE",token); 
  },[]);

  //console.log('👨',user);
  //console.log('🗿',token);

  return (
    <div>
      { 
        token?( <Player spotify={spotify} /> ):( <Login />)
      } 

      {/* spotify logo */}
      {/* login with spotify button */}
     
    </div>

  );
}

export default App;
