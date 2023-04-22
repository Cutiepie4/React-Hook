import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    listLaptops: [],
    isLoading: true,
    error: null
};

export const fetchLaptops = createAsyncThunk('laptop/fetchLaptops', async () => {
    const response = await axios.get('http://localhost:8080/laptops');
    return response.data;
});

export const deleteLaptops = createAsyncThunk('laptop/deleteLaptops', async (id) => {
    await axios.delete(`http://localhost:8080/laptops/${id}`);
    return id;
});

export const addLaptop = createAsyncThunk('laptops/addLaptop', async (laptop) => {
    await axios.post(`http://localhost:8080/laptops/0`, laptop);
    return laptop;
})

export const updateLaptop = createAsyncThunk('laptops/updateLaptop', async (laptop) => {
    await axios.put(`http://localhost:8080/laptops/${laptop.id}`, laptop);
    return laptop;
})

export const laptopSlice = createSlice({
    name: 'laptops',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchLaptops.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchLaptops.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.listLaptops = action.payload;
        },
        [deleteLaptops.pending]: (state) => {
            state.isLoading = true;
        },
        [deleteLaptops.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.listLaptops = state.listLaptops.filter(item => item.id !== action.payload);
        },
        [addLaptop.pending]: (state) => {
            state.isLoading = true;
        },
        [addLaptop.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.listLaptops = [...state.listLaptops, action.payload];
        },
        [updateLaptop.pending]: (state) => {
            state.isLoading = true;
        },
        [updateLaptop.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.listLaptops = [...state.listLaptops.filter(item => item.id !== action.payload.id), action.payload];
        }
    }
})

export const { } = laptopSlice.actions;
export default laptopSlice.reducer;