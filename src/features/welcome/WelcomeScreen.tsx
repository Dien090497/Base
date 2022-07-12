import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {signIn} from '../../state-management/redux/user/action';
import Config from 'react-native-config';

function WelcomeScreen() {
  const dispatch = useDispatch();
  const [mes, setMes] = useState({
    email: '1',
  });

  console.log(mes);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Welcome Screen</Text>
      <Button
        title={'Go'}
        onPress={() => {
          dispatch(
            signIn(
              {
                email: 'emailllll',
                password: 'password',
                accessToken: 'accessToken',
                refreshToken: 'refreshToken',
                status: true,
              },
              res => {
                console.log('AAAAAAAAA', res);
                setMes(res.data);
              },
            ),
          );
        }}
      />

      <Text style={{color: 'black'}}>RESPONSE</Text>
      <Text style={{color: 'black'}}>{Config.ENV}</Text>
      {mes?.err ? <Text style={{color: 'black'}}>{mes?.err}</Text> : null}
    </View>
  );
}

export default WelcomeScreen;
