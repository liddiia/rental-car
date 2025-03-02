import { createSlice } from "@reduxjs/toolkit";
import { apiGetCars, getCarById, apiGetBrands } from "./operations";

const initialState = {
  cars: [],
  brands: [],
  selectedCar: null,
  isLoading: false,
  error: null,
  page: 1,
  totalPages: 1,
  filters: { brand: "", minMileage: "", maxMileage: "", rentalPrice: "" } 
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
    updateFilters: (state, action) => {
      state.filters = action.payload;  
    },
    resetSelectedCar(state) {
      state.selectedCar = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(apiGetCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiGetCars.fulfilled, (state, action) => {
        state.isLoading = false;
        if (Number(action.payload.page) === 1) {
          state.cars = action.payload.items;
        } else {
          state.cars = [...state.cars, ...action.payload.items];
        }
        state.page = Number(action.payload.page); 
        state.totalPages = action.payload.totalPages;
      })
      .addCase(apiGetCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getCarById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCarById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedCar = action.payload;
      })
      .addCase(getCarById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(apiGetBrands.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiGetBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.brands = action.payload;
      })
      .addCase(apiGetBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilters, updateFilters, resetSelectedCar } = carsSlice.actions;
export default carsSlice.reducer;
