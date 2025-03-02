import { useEffect, useState, useRef } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { apiGetBrands, apiGetCars } from "../../redux/cars/operations";
import {
  selectBrands,
  selectIsLoading,
  selectFilters,
} from "../../redux/cars/selectors";
import css from "./SearchForm.module.css";
import Loader from "../Loader/Loader";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [brandDropdownOpen, setBrandDropdownOpen] = useState(false);
  const [priceDropdownOpen, setPriceDropdownOpen] = useState(false);
  const brandDropdownRef = useRef(null);
  const priceDropdownRef = useRef(null);

  // Use the provided selectors
  const brands = useSelector(selectBrands);
  const isLoading = useSelector(selectIsLoading);
  const currentFilters = useSelector(selectFilters);

  // Generate price options from 10 to 200 with step of 10
  const priceOptions = Array.from({ length: 20 }, (_, i) => {
    const price = (i + 1) * 10;
    return { value: price.toString(), label: `${price}` };
  });

  // Fetch brands on component mount
  useEffect(() => {
    dispatch(apiGetBrands());
  }, [dispatch]);

  // Add click outside listener to close dropdowns
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        brandDropdownRef.current &&
        !brandDropdownRef.current.contains(event.target)
      ) {
        setBrandDropdownOpen(false);
      }
      if (
        priceDropdownRef.current &&
        !priceDropdownRef.current.contains(event.target)
      ) {
        setPriceDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Transform brands data to react-select format
  const brandOptions = Array.isArray(brands)
    ? brands.map((brand) => ({
        value: brand,
        label: brand,
      }))
    : [];

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    const params = {
      brand: values.brand || "",
      rentalPrice: values.rentalPrice || "",
      minMileage: values.minMileage || "",
      maxMileage: values.maxMileage || "",
      page: 1, // Reset to first page on new search
    };

    dispatch(apiGetCars(params));
    resetForm();
  };

  // Convert filter values to form initial values
  const getInitialValues = () => {
    return {
      brand: currentFilters?.brand || "",
      rentalPrice: currentFilters?.rentalPrice || "",
      minMileage: currentFilters?.minMileage || "",
      maxMileage: currentFilters?.maxMileage || "",
    };
  };

  return (
    <>
      <Formik
        initialValues={getInitialValues()}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className={css.searchContainer}>
              <div className={css.formGroup} ref={brandDropdownRef}>
                <div className={css.label} >
                  Car brand
                </div>
                <div
                  className={css.selectInput}
                  onClick={() => setBrandDropdownOpen(!brandDropdownOpen)}
                >
                  {values.brand || "Choose a brand"}
                </div>

                {brandDropdownOpen && (
                  <div className={css.dropdownMenu}>
                    <div
                      className={css.dropdownItem}
                      onClick={() => {
                        setFieldValue("brand", "");
                        setBrandDropdownOpen(false);
                      }}
                    >
                      Choose a brand
                    </div>
                    {brandOptions.map((brand) => (
                      <div
                        key={brand.value}
                        className={css.dropdownItem}
                        onClick={() => {
                          setFieldValue("brand", brand.value);
                          setBrandDropdownOpen(false);
                        }}
                      >
                        {brand.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className={css.formGroup} ref={priceDropdownRef}>
                <div className={css.label} >
                  Price/ 1 hour
                </div>
                <div
                  className={css.selectInput}
                  onClick={() => setPriceDropdownOpen(!priceDropdownOpen)}
                >
                  {values.rentalPrice || "Choose a price"}
                </div>

                {priceDropdownOpen && (
                  <div className={css.dropdownMenu}>
                    <div
                      className={css.dropdownItem}
                      onClick={() => {
                        setFieldValue("rentalPrice", "");
                        setPriceDropdownOpen(false);
                      }}
                    >
                      Choose a price
                    </div>
                    {priceOptions.map((price) => (
                      <div
                        key={price.value}
                        className={css.dropdownItem}
                        onClick={() => {
                          setFieldValue("rentalPrice", price.value);
                          setPriceDropdownOpen(false);
                        }}
                      >
                        {price.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className={css.mileageCont}>
                <div className={css.mileageMinInput}>
                  <label className={css.label} htmlFor="minMileage">
                    Car mileage / km
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
                    &nbsp;
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
                {isLoading ? <Loader /> : "Search"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SearchBox;
