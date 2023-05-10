import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    listLaptops: [],
    isLoading: true,
    error: '',
    msg: '',
};

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json"
    }
});

export const searchLaptops = createAsyncThunk('laptops/searchLaptops', async (keyword) => {
    const response = await axiosInstance.get(`/laptops?keyword=${keyword}`);
    return response.data;
});

export const fetchLaptops = createAsyncThunk('laptops/fetchLaptops', async () => {
    const response = await axiosInstance.get('/laptops');
    return response.data;
});

export const deleteLaptops = createAsyncThunk('laptops/deleteLaptops', async (id) => {
    await axiosInstance.delete(`/laptops/${id}`);
    return id;
});

export const addLaptop = createAsyncThunk('laptops/addLaptop', async (laptop) => {
    await axiosInstance.post(`/laptops/0`, laptop);
    return laptop;
})

export const updateLaptop = createAsyncThunk('laptops/updateLaptop', async (laptop) => {
    await axiosInstance.put(`/laptops/${laptop.id}`, laptop);
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
        },
        [searchLaptops.pending]: (state) => {
            state.isLoading = true;
        },
        [searchLaptops.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.listLaptops = action.payload;
        }
    }
})

export default laptopSlice.reducer;