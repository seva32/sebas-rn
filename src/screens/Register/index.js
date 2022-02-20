//2.19.30
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Register from '../../components/Signup';
import envs from '../../config/env';

function RegisterScreen(params) {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  console.log('envs ', envs);
  console.log('__DEV__ ', __DEV__);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    setErrors(prev => {
      if (name === 'password') {
        return {
          ...prev,
          [name]: value.length < 6 ? 'Must be more than 5 char' : null,
        };
      }
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
