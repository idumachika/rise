/* eslint-disable react-native/no-inline-styles */
import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {z} from 'zod';
import EyeClosedIcon from '../../assets/icons/EyeClosedIcon';
import EyeIcon from '../../assets/icons/EyeIcon';
import SmallCheckIcon from '../../assets/icons/SmallCheckIcon';
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
    .min(1, 'Email address is required')
    .email('Invalid email  address')
    .trim(),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters')
    .regex(/(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
      message:
        'Password must contain a symbol, an uppercase and lowercase character',
    })
    .trim(),
});

export type RegisterSchema = z.infer<typeof schema>;

const RegisterScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const {control, handleSubmit, watch} = useForm<RegisterSchema>({
    defaultValues: {
      email_address: '',
      password: '',
    },
    resolver: zodResolver(schema),
    
  });

  let password = watch('password');
  const onSubmit: SubmitHandler<RegisterSchema> = data => {
    navigation.navigate('MoreInfo', {...data});
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />

      <AuthHeader
        heading="Create an account"
        subheading="Start building your dollar-denominated investment portfolio"
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

        <View style={styles.criterias}>
          <View style={styles.criteria}>
            <View
              style={[
                styles.criteriaIcon,
                {
                  backgroundColor:
                    password.length >= 8 ? colors.primary : '#ff',
                },
              ]}>
              <SmallCheckIcon />
            </View>
            <Text style={styles.criteriaText}>Minimum of 8 characters</Text>
          </View>
          <View style={styles.criteria}>
            <View
              style={[
                styles.criteriaIcon,
                {
                  backgroundColor: /[A-Z]/g.test(password)
                    ? colors.primary
                    : '#ff',
                },
              ]}>
              <SmallCheckIcon />
            </View>
            <Text style={styles.criteriaText}>One UPPERCASE character</Text>
          </View>
          <View style={styles.criteria}>
            <View
              style={[
                styles.criteriaIcon,
                {
                  backgroundColor: /[!@#$%^&*]/g.test(password)
                    ? colors.primary
                    : '#ff',
                },
              ]}>
              <SmallCheckIcon />
            </View>
            <Text style={styles.criteriaText}>
              One unique character (e.g: !@#$%^&*?)
            </Text>
          </View>
        </View>

        <View style={styles.btnContainer}>
          <Button
            onPress={handleSubmit(onSubmit)}
            text="Sign up"
            variant="primary"
          />
        </View>
      </View>
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
  criterias: {
    gap: 12,
  },
  criteria: {
    flexDirection: 'row',
    gap: 10,
  },
  criteriaIcon: {
    width: 18,
    height: 18,
    borderRadius: 99999,
    borderColor: colors.primary,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  criteriaText: {
    color: '#000',
    fontSize: 16,
    lineHeight: 19,
    fontFamily: fonts.dmsans_regular,
  },
  btnContainer: {
    marginTop: 20,
  },
});
export default RegisterScreen;
