import * as yup from 'yup';

export const schema = yup.object().shape({
    name: yup.string().required("Jméno je povinné"),
    phoneNumber: yup.string()
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Telefonní číslo je neplatné")
    .required("Telefonní číslo je povinné"),
    email: yup.string().email("Email je neplatný").required("Email je povinný"),
    language: yup.string().required("Jazyk je povinný"),
  });