import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// 'https://car-rental-api.goit.global/cars
// ?brand=Buick&rentalPrice=50&minMileage=100&maxMileage=100000
// &limit=12&page=2' 



export const instance = axios.create({
  baseURL: "https://car-rental-api.goit.global/",
});

export const apiGetCars = createAsyncThunk(
  "cars/fetchCars",
  async (params = {}, thunkAPI) => {
    try {
      const defaultParams = {
        brand: "",
        rentalPrice: "",
        minMileage: "",
        maxMileage: "",
        limit:12,
        page: 1
      };
      const queryParams = new URLSearchParams({
        ...defaultParams,
        ...params,
      }).toString();
      const response = await instance.get(`/cars?${queryParams}`);
      return {
        items: response.data.cars,
        page: Number(response.data.page),
        totalPages: Number(response.data.totalPages),
                
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCarById = createAsyncThunk(
  "cars/getOneCar",
  async (id, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/cars/${id}`);
      console.log("API id response:", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const apiGetBrands = createAsyncThunk(
  "cars/getBrands",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get("/brands");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
