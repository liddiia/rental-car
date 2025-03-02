# 🚗 Car Rental Search

A project for searching and filtering rental cars.

## 🔧 Features
- Filter by brand, price, and mileage
- Interactive UI with dropdown lists
- API requests to fetch car data


## 🛠️ Technologies
This project is built with:

- **React + Vite** — Fast and modern development environment  
- **React Router DOM** — Client-side routing for seamless navigation  
- **Redux Toolkit** — State management made easy and efficient  
- **Redux Persist** — Keeps Redux state stored even after page reloads  
- **Formik + Yup** — Form handling with validation  
- **Axios** — HTTP client for API requests  
- **React Toastify** — Beautiful and customizable notifications  
- **React Spinners** — Loading indicators for a better user experience  
- **Nanoid** — Lightweight unique ID generator  
- **Modern Normalize** — Cross-browser consistent styling  
- **Manrope Font** — Clean and modern typography  


## 📦 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/liddiia/rental-car
   cd car-rental-search
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the project:
   ```sh
   npm run dev
   ```

## 🔗 API
The project uses an external API to fetch car data:

- `GET https://car-rental-api.goit.global/cars` — Retrieves a list of all available cars.
- `GET https://car-rental-api.goit.global/cars?brand=Volvo&rentalPrice=80&minMileage=4000&maxMileage=6000&limit=12&page=2` — Retrieves cars filtered by **brand (Volvo), rental price (80), mileage range (4000-6000 km)**, with a **limit of 12 results per page** and requesting **page 2**.
- `GET https://car-rental-api.goit.global/brands` — Retrieves a list of available car brands.
- `GET https://car-rental-api.goit.global/cars/11a3ab35-07b8-4336-b06b-602cdc309f2c` — Retrieves details of a specific car by its **unique ID** (`11a3ab35-07b8-4336-b06b-602cdc309f2c`).

## 🐞 Possible Issues
- **CORS error:** Use a proxy or check API availability.
- **No data returned:** Verify that query parameters are correct.

## 👥 Author
- **Lidiia Boiko** — [GitHub](https://github.com/liddiia)

