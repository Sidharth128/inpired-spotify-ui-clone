

export const authEndpoint = 
"https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "447a752fd496499eaf318f5ebc026563";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash 
    .substring(1)
    .split('&')
    .reduce((initial,item)=>{
        //http://localhost:3000/#access_token=BQDDqsyvVTfAzpPoGmfe7P4Uf38ONwy8t6PyPHDq08xwArGa9LYsOZ1O4cqzZOse5ui6eAH1nXKCkqqPbh8ZYCqroUPOCGWAljSAfRcUVqY9EOLordf0FyKuDRBRrQnEXk5q106L4XwZOUpYukhZe-AFCVJ4jbDh-cxpxNMANKL9EsaKemzi8MHKgO1H8v7ZRgloF7j5M3jpqRn0&token_type=Bearer&expires_in=3600
        //#accessToken=mysupersecretkey&name=sidhu
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    },{});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
//  token is just like a pass (we get after authentication)
//https://accounts.spotify.com/en/authorize?client_id=447a752fd496499eaf318f5ebc026563&redirect_uri=http://localhost:3000/&scope=user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state&response_type=token&show_dialog=true