import { Form, Formik, Field, ErrorMessage } from "formik";
import css from "./BookingForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
const BookingForm = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await resetForm();
      toast.success("Car rented successfully! We will contact you soon.", {
        position: "top-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const nameFieldId = nanoid(4);
  const emailFieldId = nanoid(4);
  const dateFieldId = nanoid(4);
  const comentFieldId = nanoid(4);

  const BookingSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!Minimum of 3 characters")
      .max(50, "Too Long! Maximum of 50 characters")
      .required("Required"),

    email: Yup.string().email("Must be a valid email!").required("Required"),
    date: Yup.date(),
    comment: Yup.string().max(400, "Too Long! Maximum of 400 characters!"),
  });
  return (
    <>
      <div className={css.titleFormCont}>
        <h3 className={css.titleForm}>Book your car now</h3>
        <p className={css.subTitleForm}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <Formik
        initialValues={{
          name: "",
          email: "",
          date: "",
          comment: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={BookingSchema}
      >
        <Form className={css.contactForm}>
          <Field
            className={css.formInput}
            type="text"
            name="name"
            placeholder="Name*"
            id={nameFieldId}
          />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />

          <Field
            className={css.formInput}
            type="text"
            name="email"
            placeholder="Email*"
            id={emailFieldId}
          />
          <ErrorMessage
            className={css.errorMessage}
            name="email"
            component="span"
          />

          <Field
            className={css.formInput}
            type="text"
            name="date"
            placeholder="Booking date"
            id={dateFieldId}
          />
          <ErrorMessage
            name="date"
            component="div"
            className={css.errorMessage}
          />

          <Field
            className={css.formComent}
            as="textarea"
            name="comment"
            placeholder="Comment"
            id={comentFieldId}
          />
          <ErrorMessage
            name="comment"
            component="div"
            className={css.errorMessage}
          />

          <button className={css.sendBtn} type="submit">
            Send
          </button>
        </Form>
      </Formik>
      <ToastContainer />
    </>
  );
};

export default BookingForm;
