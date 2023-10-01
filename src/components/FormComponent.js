import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "../App.css";

function FormComponent({ handleSubmit, handleReset }) {
  const [resetweather, setResetWeather] = useState(0);

  const handleResetButtonClick = () => {
    setResetWeather(1);
  };

  function handleAcceptClick(event) {
    event.preventDefault();
    alert("Herhangi bir sözleşme yoktur :)");
  }

  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        agree: false,
        country: "",
        coord: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Ad boş bırakılamaz!"),
        surname: Yup.string().required("Soy Ad boş bırakılamaz!"),
        country: Yup.string().required("Şehir boş bırakılmaz!"),
        agree: Yup.bool().oneOf([true], "Koşulları kabul etmelisiniz!"),
        coord: Yup.string()
          .required("kordinasyon bilgisi verilsin mi lütfen seçiniz!")
          .oneOf(["Evet", "Hayır"]),
      })}
      onSubmit={handleSubmit}
    >
      {({
        values,
        handleChange,
        errors,
        touched,
        dirty,
        isSubmitting,
        resetForm,
      }) => (
        <Form>
          <div className="form-content">
            <div className="form-group">
              <label htmlFor="name">Ad</label>
              <Field
                id="name"
                name="name"
                type="text"
                placeholder="Adınızı giriniz"
                className={`input ${
                  touched.name && errors.name ? "error" : ""
                }`}
              />
              {touched.name && errors.name && (
                <div className="input-feedback">{errors.name}</div>
              )}
            </div>

            <div className="form-group topMargin">
              <label htmlFor="surname">Soyad</label>
              <Field
                id="surname"
                name="surname"
                type="text"
                placeholder="Soyadınızı giriniz"
                className={`input ${
                  touched.surname && errors.surname ? "error" : ""
                }`}
              />
              {touched.surname && errors.surname && (
                <div className="input-feedback">{errors.surname}</div>
              )}
            </div>

            <div className="form-group topMargin">
              <label htmlFor="country">Şehir</label>
              <Field
                id="country"
                name="country"
                type="text"
                placeholder="Şehiri giriniz"
                className={`input ${
                  touched.country && errors.country ? "error" : ""
                }`}
              />
              {touched.country && errors.country && (
                <div className="input-feedback">{errors.country}</div>
              )}
            </div>

            <div className="form-group topMargin">
              <label htmlFor="coord">Kordinasyon bilgileri verilsin mi?</label>
              <Field
                as="select"
                id="coord"
                name="coord"
                className={`input ${
                  touched.coord && errors.coord ? "error" : ""
                }`}
              >
                <option value="" label="Seçiniz"></option>
                <option value="Evet">Evet</option>
                <option value="Hayır">Hayır</option>
              </Field>
              {touched.coord && errors.coord && (
                <div className="input-feedback">{errors.coord}</div>
              )}
            </div>

            <div className="checkbox topMargin">
              <label htmlFor="agree" className="checkbox-label">
                <Field
                  id="agree"
                  name="agree"
                  type="checkbox"
                  className={`checkbox ${
                    touched.agree && errors.agree ? "error" : ""
                  }`}
                />
                <a href="#" onClick={handleAcceptClick}>
                  Sözleşme
                </a>
                yi okudum kabul ediyorum
              </label>
              {touched.agree && errors.agree && (
                <div className="input-feedback">{errors.agree}</div>
              )}
            </div>

            <div className="buttons">
              <button type="submit" disabled={!dirty || isSubmitting}>
                Kaydol
              </button>
              <button
                type="button"
                onClick={() => {
                  resetForm();
                  handleResetButtonClick();
                  handleReset();
                }}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormComponent;
