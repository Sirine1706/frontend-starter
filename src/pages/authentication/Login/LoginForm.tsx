import React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";
import { showToast } from "../../../utils/toast";
import { useAppDispatch } from "../../../hooks/redux";
import FieldError from "../../../components/common/alerts/FieldError";
import Envelope from "../../../components/icons/Envelope";
import LockIcon from "../../../components/icons/LockIcon";
import OutlineButton from "../../../components/common/buttons/OutlineButton";

type Props = {};

interface Values {
  password: string;
  email: string;
}

const SigninSchema = Yup.object().shape({
  password: Yup.string()
    .required("Mot de passe requis")
    .min(6, "Le mot de passe doit être au moins de 6 caractères"),
  email: Yup.string()
    .email("Email invalide")
    .required("e-mail est requis")
    .min(6, "e-mail doit être au moins de 6 caractères"),
});

function LoginForm({}: Props) {
  const navigate = useNavigate();
  const { login } = useAuth();
  const dispatch: Function = useAppDispatch();

  return (
    <Formik
      initialValues={{
        password: "",
        email: "",
      }}
      validationSchema={SigninSchema}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        login(values.email, values.password, dispatch)
          .then(() => {
            setSubmitting(false);
            navigate("/");
          })
          .catch((error) => {
            showToast(error.message, "error");
          });
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="mb-4">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Email
            </label>
            <div className="relative">
              <Field
                id="email"
                type="email"
                placeholder="Entrer votre Email"
                className={`${
                  errors.email
                    ? "border-red-400"
                    : "focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                } w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none `}
                name="email"
              />
              {errors.email && touched.email ? (
                <FieldError error={errors.email} />
              ) : null}
              <span className="absolute right-4 top-4">
                <Envelope />
              </span>
            </div>
          </div>
          <div className="mb-6">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Mot de passe
            </label>
            <div className="relative">
              <Field
                id="password"
                type="password"
                placeholder="Entrer votre mot de passe"
                className={`${
                  errors.password
                    ? "border-red-400"
                    : "focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                } w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none `}
                name="password"
              />
              {errors.password && touched.password ? (
                <FieldError error={errors.password} />
              ) : null}
              <span className="absolute right-4 top-4">
                <LockIcon />
              </span>
            </div>
          </div>
          <div className="mb-5">
            <OutlineButton type="submit">Se connecter</OutlineButton>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
