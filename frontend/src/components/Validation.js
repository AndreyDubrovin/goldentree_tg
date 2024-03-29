import React, { useCallback } from "react";
/*
//хук управления формой
export function useForm() {
  const [values, setValues] = React.useState({});

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setValues({...values, [name]: value});
  };

  return {values, handleChange, setValues};
}
 */
//хук управления формой и валидации формы
export function useFormWithValidation() {
  const [values, setValues] = React.useState({
    surname: '',
    name: '',
    patronymic: '',
    telegram: '',
    telephone: '',
    code: '',
    feedbackWb: '',
  });
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    let value = target.value;
    if (name === 'telegram' && value.startsWith('@@')) value = value.replace('@','');
    setValues({...values, [name]: value});
    setIsValid(target.closest("form").checkValidity());
    setErrors({...errors, [name]: target.validationMessage });
  };

  const handleChangeFile = (event) => {
    const target = event.target;
    let name = target.name;
    let value;
    if (name === undefined) name = 'feedbackWb';
    if (value === undefined) {
      value = 'none';
    } else {
      value = target.files[0].name;
    }
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };


  const handleInstagram = (event) => {
    const target = event.target;
    const name = target.name;
    const value = "@";
    if (values.telegram === '' || !values.telegram.startsWith('@')) setValues({...values, [name]: value});
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, handleInstagram,handleChangeFile };
}
