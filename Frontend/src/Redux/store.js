import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './feature/allstudentslice';

export const store = configureStore({

    reducer: {
        allStudents: studentReducer,
    }
})
