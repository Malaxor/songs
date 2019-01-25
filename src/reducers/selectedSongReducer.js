export const selectedSongReducer = (state = null, action) => {

    switch(action.type) {
        
        case 'SONG_SELECTED':
        return action.payload;
    }
    return state
}