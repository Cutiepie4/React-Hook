import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    credentails: {},
    listLaptops: [],
    isLoading: true,
    error: '',
    msg: ''
};

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
});

export const loginApi = createAsyncThunk('laptops/loginApi', async (credentails) => {
    return axios.post('http://localhost:8080/login-submit', credentails,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true
        }).then(() => credentails)
        .catch(() => { });
});

export const logoutApi = createAsyncThunk('laptops/logoutApi', async () => {
    return axios.get('http://localhost:8080/logout', { withCredentials: true }).then((res) => { console.log(res) })
        .catch(() => { });
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
        [loginApi.fulfilled]: (state, action) => {
            state.credentails = action.payload;
        },
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

// export const { } = laptopSlice.actions;
export default laptopSlice.reducer;