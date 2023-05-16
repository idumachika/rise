import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {z} from 'zod';
import {useLogin} from '../../api/auth/useLogin';
import EyeClosedIcon from '../../assets/icons/EyeClosedIcon';
import EyeIcon from '../../assets/icons/EyeIcon';
import AuthHeader from '../../components/AuthHeader';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {colors, fonts} from '../../theme/theme';
import {NavigationProps} from '../../types/navigators';

const schema = z.object({
  email_address: z
    .string({
      required_error: 'Email address is required',
    })
    .email('Invalid email address')
    .trim(),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(8, 'Password must be at least 8 characters')
    .trim(),
});

export type LoginSchema = z.infer<typeof schema>;

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const {control, handleSubmit} = useForm<LoginSchema>({
    defaultValues: {
      email_address: '',
      password: '',
    },
    resolver: zodResolver(schema),
  });

  const loginUser = useLogin();

  const onSubmit: SubmitHandler<LoginSchema> = data => {
    console.log('data', data);
    loginUser.mutate(data, {
      onSuccess: () => {
        navigation.navigate('Success', {
          heading: 'You’ve created your PIN',
          subheading:
            'Keep your account safe with your secret PIN. Do not share this PIN with anyone.',
          btnText: 'Okay',
          location: 'Tab',
        });
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />

      <View>
        <AuthHeader
          heading="Welcome back"
          subheading="Let’s get you logged in to get back to building your dollar-denominated investment portfolio."
        />

        <View style={styles.formContainer}>
          <Input control={control} name="email_address" label="Email" />
          <Input
            control={control}
            name="password"
            label="Password"
            isPassword
            customShowPasswordComponent={<EyeIcon />}
            customHidePasswordComponent={<EyeClosedIcon />}
          />

          <Button
            onPress={handleSubmit(onSubmit)}
            variant="primary"
            disabled={loginUser.isLoading}
            text={
              loginUser.isLoading ? (
                <ActivityIndicator color={colors.black} />
              ) : (
                'Sign in'
              )
            }
          />

          <Text style={styles.forgotPasswordText}>I forgot my password</Text>
        </View>
      </View>

      <Text style={styles.footerText}>
        Don't have an account?{' '}
        <Text style={{color: colors.primary}}>Sign up</Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  formContainer: {
    marginTop: 38,
    gap: 20,
  },
  footerText: {
    textAlign: 'center',
    fontFamily: fonts.dmsans_bold,
    fontSize: 15,
    lineHeight: 20,
    marginTop: 'auto',
    paddingBottom: 40,
    color: colors.soft_neutral,
  },
  forgotPasswordText: {
    textAlign: 'center',
    fontFamily: fonts.dmsans_bold,
    fontSize: 15,
    lineHeight: 20,
    paddingTop: 32,
    color: colors.primary,
  },
});
export default LoginScreen;
