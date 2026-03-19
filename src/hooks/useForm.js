import { useState, useCallback } from 'react';
 
export const useForm = (initialValues, onSubmit) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
 
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }, []);
 
  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  }, []);
 
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    onSubmit(formData);
  }, [formData, onSubmit]);
 
  const reset = useCallback(() => {
    setFormData(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);
 
  return {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setFormData,
    setErrors,
  };
};
 
export default useForm;