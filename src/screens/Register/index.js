import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Register from '../../components/Signup';

function RegisterScreen(params) {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    setErrors(prev => {
      return {...prev, [name]: value ? null : 'Please fill this field'};
    });
  };

  const onSubmit = () => {
    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please fill this field'};
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please fill this field'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please fill this field'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please fill this field'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please fill this field'};
      });
    }
  };

  return (
    <Register
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}

export default RegisterScreen;
