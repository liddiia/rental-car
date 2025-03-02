import { useState } from "react";
import { Formik, Form, Field } from "formik";

// import { useDispatch, useSelector } from "react-redux";
// import { apiGetBrands, apiGetCars } from "../../redux/cars/operations";
// import {
//   selectBrands,
//   selectIsLoading,
//   selectFilters,
// } from "../../redux/cars/selectors";


import css from "./SearchForm.module.css";

const CustomSelect = ({ field, form, options, placeholder }) => {
  const [open, setOpen] = useState(false);
  const handleSelect = (value) => {
    form.setFieldValue(field.name, value);
    setOpen(false);
  };

  return (
    <div
      className={`${css.selectContainer} ${open ? css.open : ""}`}
      onClick={() => setOpen(!open)}
    >
      <div className={css.selectButton}>
        {field.value
          ? options.find((opt) => opt.value === field.value)?.label
          : placeholder}
        <span className={css.arrow}>▼</span>
      </div>
      {open && (
        <div className={css.selectDropdown}>
          {options.map((option) => (
            <div
              key={option.value}
              className={css.selectOption}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// const SearchForm = () => {
//   const dispatch = useDispatch();

//   // Use the provided selectors
//   const brands = useSelector(selectBrands);
//   const isLoading = useSelector(selectIsLoading);
//   const currentFilters = useSelector(selectFilters);

//   // Generate price options from 10 to 200 with step of 10
//   const priceOptions = Array.from({ length: 20 }, (_, i) => {
//     const price = (i + 1) * 10;
//     return { value: price.toString(), label: `${price}` };
//   });
//   // Fetch brands on component mount
//   useEffect(() => {
//     dispatch(apiGetBrands());
//   }, [dispatch]);

//   // Transform brands data to react-select format
//   const brandOptions = Array.isArray(brands)
//     ? brands.map((brand) => ({
//         value: brand,
//         label: brand,
//       }))
//     : [];

//   // Handle form submission
//   const handleSubmit = (values, { resetForm }) => {
//     const params = {
//       brand: values.brand || "",
//       rentalPrice: values.rentalPrice || "",
//       minMileage: values.minMileage || "",
//       maxMileage: values.maxMileage || "",
//       page: 1, // Reset to first page on new search
//     };

//     dispatch(apiGetCars(params));
//     resetForm();
//   };

//   // Convert filter values to form initial values
//   const getInitialValues = () => {
//     const brand = currentFilters?.brand
//       ? { value: currentFilters.brand, label: currentFilters.brand }
//       : null;

//     const rentalPrice = currentFilters?.rentalPrice
//       ? {
//           value: currentFilters.rentalPrice,
//           label: `$${currentFilters.rentalPrice} `,
//         }
//       : null;

//     return {
//       brand,
//       rentalPrice,
//       minMileage: currentFilters?.minMileage || "",
//       maxMileage: currentFilters?.maxMileage || "",
//     };
//   };

//   return (
//     <>
//       <Formik
//         initialValues={getInitialValues()}
//         onSubmit={handleSubmit}
//         enableReinitialize
//       >
//         {({ setFieldValue }) => (
//           <Form>
//             <div className={css.searchContainer}>
//               <div className={css.formGroup}>
//                 <label className={css.label} htmlFor="brand">
//                   Brand
//                 </label>
//                 <Field
//                   as="select"
//                   name="brand"
//                   id="brand"
//                   className={css.selectInput}
//                   onChange={(event) =>
//                     setFieldValue("brand", event.target.value)
//                   }
//                 >
//                   <option value="">Select brand</option>
//                   {brandOptions.map((brand) => (
//                     <option key={brand.value} value={brand.value}>
//                       {brand.label}
//                     </option>
//                   ))}
//                 </Field>
//               </div>
//               <div className={css.formGroup}>
//                 <label className={css.label} htmlFor="rentalPrice">
//                   Rental Price (per hour)
//                 </label>
//                 <Field
//                   as="select"
//                   id="rentalPrice"
//                   name="rentalPrice"
//                   className={css.selectInput}
//                   onChange={(event) =>
//                     setFieldValue("rentalPrice", event.target.value)
//                   }
//                 >
//                   <option value="">Select price</option>
//                   {priceOptions.map((p) => (
//                     <option key={p.value} value={p.value}>
//                       {p.label}
//                     </option>
//                   ))}
//                 </Field>
//               </div>
//               <div className={css.mileageCont}>
//                 <div className={css.mileageMinInput}>
//                   <label className={css.label} htmlFor="minMileage">
//                     Min Mileage
//                   </label>
//                   <Field
//                     type="text"
//                     id="minMileage"
//                     name="minMileage"
//                     placeholder="From"
//                     className={css.formControlMin}
//                   />
//                 </div>

//                 <div className={css.mileageMaxInput}>
//                   <label className={css.label} htmlFor="maxMileage">
//                     Max Mileage
//                   </label>
//                   <Field
//                     type="text"
//                     id="maxMileage"
//                     name="maxMileage"
//                     placeholder="To"
//                     className={css.formControlMax}
//                   />
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className={css.searchButton}
//                 disabled={isLoading}
//               >
//                 {isLoading ? "Searching..." : "Search cars"}
//               </button>{" "}
//             </div>{" "}
//           </Form>
//         )}
//       </Formik>
//     </>
//   );
// };

// export default SearchForm;
// ------------------------------------------------

const SearchForm = ({
  getInitialValues,
  handleSubmit,
  brandOptions,
  priceOptions,
  isLoading,
}) => {
  return (
    <>
      <Formik
        initialValues={getInitialValues()}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ setFieldValue }) => (
          <Form>
            <div className={css.searchContainer}>
              <div className={css.formGroup}>
                <label className={css.label} htmlFor="brand">
                  Brand
                </label>
                <Field
                  name="brand"
                  component={CustomSelect}
                  options={brandOptions}
                  placeholder="Choose a brand"
                />
              </div>

              <div className={css.formGroup}>
                <label className={css.label} htmlFor="rentalPrice">
                  Rental Price (per hour)
                </label>
                <Field
                  name="rentalPrice"
                  component={CustomSelect}
                  options={priceOptions}
                  placeholder="Choose a price"
                />
              </div>

              <div className={css.mileageCont}>
                <div className={css.mileageMinInput}>
                  <label className={css.label} htmlFor="minMileage">
                    Min Mileage
                  </label>
                  <Field
                    type="text"
                    id="minMileage"
                    name="minMileage"
                    placeholder="From"
                    className={css.formControlMin}
                  />
                </div>

                <div className={css.mileageMaxInput}>
                  <label className={css.label} htmlFor="maxMileage">
                    Max Mileage
                  </label>
                  <Field
                    type="text"
                    id="maxMileage"
                    name="maxMileage"
                    placeholder="To"
                    className={css.formControlMax}
                  />
                </div>
              </div>

              <button
                type="submit"
                className={css.searchButton}
                disabled={isLoading}
              >
                {isLoading ? "Searching..." : "Search cars"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SearchForm;
