
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    students: {
        data: [],
    }
};

const studentSlice = createSlice({
    name: "students",

    initialState,

    reducers: {

        setStudents: (state, action) => {
            state.students = action.payload;

        },

        deleteStudent: (state, action) => {

            state.students.data = state.students.data.filter(
                (student) => student._id !== action.payload
            );
        }
    }
});

export const { setStudents , deleteStudent } = studentSlice.actions;

export default studentSlice.reducer;