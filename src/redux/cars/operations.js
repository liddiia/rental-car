import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://car-rental-api.goit.global/",
});

export const apiGetCars = createAsyncThunk(
  "cars/fetchCars",
  async (params = {}, thunkAPI) => {
    try {
      const defaultParams = {
        page: 1,
        brand: "",
        rentalPrice: "",
        minMileage: "",
        maxMileage: "",
      };
      const queryParams = new URLSearchParams({
        ...defaultParams,
        ...params,
      }).toString();

      const response = await instance.get(`/cars?${queryParams}`);

      return {
        items: response.data.cars,
        page: params.page || 1,
        totalPages: response.headers["x-total-pages"] || 10,
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
