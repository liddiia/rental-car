export const selectIsLoading = (state) => state.cars.loading;
export const selectError = (state) => state.cars.error;
export const selectCars = (state) => state.cars.cars;
export const selectBrands = (state) => state.cars.brands;
export const selectSelectedCar = (state) => state.cars.selectedCar;
export const selectPage = (state) => state.cars.page;
export const selectTotalPages = (state) => state.cars.totalPages;
export const selectFilters = (state) => state.cars.filters;
