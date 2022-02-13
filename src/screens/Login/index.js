import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Container from '../../components/common/container';
import Input from '../../components/Input';

function Login(params) {
  const [text, onChangeText] = React.useState('Useless Text');

  useEffect(() => {
    console.warn(text);

    return () => {};
  }, [text]);

  return (
    <Container>
      <SafeAreaView>
        <Input
          value={text}
          onChangeText={onChangeText}
          style={{}}
          label="Username"
          icon={<Text>SSS</Text>}
          iconPosition="right"
        />
      </SafeAreaView>
    </Container>
  );
}

export default Login;
