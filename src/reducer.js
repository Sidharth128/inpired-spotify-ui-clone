
export const  initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //just for debbuging, paste token
    // token:'BQD8DUx43R8V59dG4lgrIddDYHZ0NouRqOCGnqibQGZ32k1cNprQ9571Q-4ux6J4rXuRIxCGsyz1EZ7q56n4TEuMSo197VDAulSqal-qb77KETYFhWejvjx-QDRJusOVfUVglz7Y_kCOmzDnbIiZ-Aq7mlQyWq4ufeR0aBYhCLvetckfnIIEcuOTT6m_fG5Mj9yNp9NK2ieUTM-3',
};

 const reducer = (state, action) => {
    console.log(action);

    // Action has a type and a payload
    switch(action.type) {
        case 'SET_USER': //type
            return {
                ...state,   
                user: action.user, //payload
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token:action.token,
            };
        case 'SET_PLAYLISTS':
             return {
                ...state,
                playlists:action.playlists,
             };
        case 'SET_DISCOVER_WEEKLY':
        return {
            ...state,
            discover_weekly:action.discover_weekly,
            };
            default: return state;
    }
};

export default reducer; 