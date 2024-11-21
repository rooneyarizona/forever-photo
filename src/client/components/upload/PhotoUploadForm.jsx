import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  userId: Yup.string()
    .required("Required")
    .max(15, "Must be 15 characters or less"),
  photoLocation: Yup.string()
    .required("Required")
    .max(20, "Must be 20 characters or less"),
  photoUrl: Yup.string()
    .required("Required")
    .url("Invalid URL"),
});

function PhotoUploadForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{
        userId: "",
        photoLocation: "",
        photoUrl: "",
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <label htmlFor="userId">User ID</label>
        <Field id="userId" name="userId" type="text" />
        <ErrorMessage name="userId" component="div" />

        <label htmlFor="photoLocation">Photo Location</label>
        <Field id="photoLocation" name="photoLocation" type="text" />
        <ErrorMessage name="photoLocation" component="div" />

        <label htmlFor="photoUrl">Photo URL</label>
        <Field id="photoUrl" name="photoUrl" type="text" />
        <ErrorMessage name="photoUrl" component="div" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default PhotoUploadForm;
