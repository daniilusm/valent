/** @format */

import { Formik, Form } from "formik";
import * as Yup from "yup";
import cx from "classnames";

import s from "./Home.module.scss";
import Input from "components/Input";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const validation = Yup.object().shape({
    from: Yup.string().min(2, "Too Short!").required("*Required"),
    to: Yup.string().min(2, "Too Short!").required("*Required"),
  });

  const initialValues = {
    from: "",
    to: "",
  };

  const onSubmit = useCallback((values, { resetForm }) => {
    console.info(values);

    const newUrl = {
      pathname: "/model",
      query: { from: values.from, to: values.to },
    };

    router.push(newUrl);

    resetForm();
  }, []);

  return (
    <div className={s.root}>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={onSubmit}
        validateOnMount
      >
        {({ handleSubmit, handleChange, errors, touched, values, isValid }) => (
          <Form className={cx(s.spaceBetween, s.root)} onSubmit={handleSubmit}>
            <Input
              className={s.input}
              placeholder="From"
              name="from"
              value={values.from}
              onChange={handleChange}
              isDark
              error={errors.title && touched.title ? errors.title : null}
            />
            <Input
              className={s.input}
              placeholder="To"
              name="to"
              value={values.to}
              onChange={handleChange}
              isDark
              error={errors.title && touched.title ? errors.title : null}
            />
            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Home;
