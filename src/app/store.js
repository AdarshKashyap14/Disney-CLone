import {configureStore} from '@reduxjs/toolkit';


import userReducer from '../features/user/userSlice';
import movieReducer from "../features/movie/movieSlice"

export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer
    },
});

// Compare this snippet from disney-clone\src\index.js:



