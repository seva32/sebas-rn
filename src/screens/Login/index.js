import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Container from '../../components/common/container';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton/index';

function Login(params) {
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');

  useEffect(() => {
    console.warn(username);

    return () => {};
  }, [username]);

  return (
    <Container>
      <SafeAreaView>
        <Input
          value={username}
          onChangeText={onChangeUsername}
          style={{}}
          label="Username"
          // error={'Required field'}
        />
        <Input
          value={password}
          onChangeText={onChangePassword}
          style={{}}
          label="Password"
          icon={<Text>??</Text>}
          iconPosition="right"
          // error={'Required field'}
        />
        <CustomButton title="Submit" loading={true} disabled={true} secondary />
      </SafeAreaView>
    </Container>
  );
}

export default Login;
