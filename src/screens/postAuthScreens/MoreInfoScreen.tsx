import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {SafeAreaView} from 'react-native-safe-area-context';
import {z} from 'zod';
import {useRegister} from '../../api/auth/useRegister';
import CalenderIcon from '../../assets/icons/CalenderIcon';
import AuthHeader from '../../components/AuthHeader';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {colors, fonts} from '../../theme/theme';
import {NavigationProps, RouteProps} from '../../types/navigators';

const schema = z.object({
  first_name: z.string().min(1, 'First name is Required').trim(),
  last_name: z.string().min(1, 'Last name is Required').trim(),
  date_of_birth: z.string().min(1, 'Date of Birth is Required').trim(),
  phone_number: z
    .string()
    .min(1, 'Phone number is Required')
    .max(11, 'Phone number cannot be more than 11 digits')
    .trim()
    .default(''),
  username: z
    .string()
    .min(1, 'Nick name is Required')
    .trim()
    .default('')
    .transform(val => val?.split(' ').join('')),
});

export type MoreInfoSchema = z.infer<typeof schema>;

const MoreInfoScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<RouteProps<'MoreInfo'>>();
  const [date, setDate] = React.useState<Date>(new Date());
  const [open, setOpen] = React.useState(false);
  const {control, handleSubmit, setError, setValue} = useForm<MoreInfoSchema>({
    defaultValues: {
      date_of_birth: '',
      first_name: '',
      last_name: '',
      phone_number: '',
      username: '',
    },
    resolver: zodResolver(schema),
  });

  const registerUser = useRegister();

  const onSubmit: SubmitHandler<MoreInfoSchema> = data => {
    if (new Date().getFullYear() - new Date(date).getFullYear() < 18) {
      setError('date_of_birth', {
        message: 'You must be 18 years or older to register',
      });
    }

    const dateofBirth = `${new Date(date).getFullYear()}-${
      new Date(date).getMonth() + 1
    }-${new Date(date).getDate()}`;

    const input = {
      ...data,
      ...route.params,
      date_of_birth: dateofBirth,
      username: data.username,
    };
    console.log('data', input);
    registerUser.mutate(input, {
      onSuccess: () => {
        navigation.navigate('Success', {
          heading: 'You just created your Rise account',
          subheading: 'Welcome to Rise, let’s take you home',
          btnText: 'Okay',
          location: 'Login',
        });
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AuthHeader
            heading="Tell Us More About You"
            subheading="Please use your name as it appears on your ID."
          />

          <View style={styles.formContainer}>
            <Input
              control={control}
              name="first_name"
              label="Legal First Name"
            />
            <Input control={control} name="last_name" label="Legal Last Name" />
            <Input control={control} name="username" label="Nick name" />
            <Input control={control} name="phone_number" label="Phone number" />
            <Input
              control={control}
              name="date_of_birth"
              label="Date of Birth"
              rightComponent={<CalenderIcon style={styles.calenderIcon} />}
              placeholder="Choose Date"
              onPressIn={() => setOpen(true)}
            />
            <DatePicker
              modal
              open={open}
              date={date}
              mode="date"
              androidVariant="nativeAndroid"
              onConfirm={newDate => {
                setDate(newDate);
                setValue('date_of_birth', newDate.toDateString());
                setOpen(false);
              }}
              onCancel={() => setOpen(false)}
            />

            <Button
              onPress={handleSubmit(onSubmit)}
              disabled={registerUser.isLoading}
              text={
                registerUser.isLoading ? (
                  <ActivityIndicator color={colors.black} />
                ) : (
                  'Continue'
                )
              }
              variant="primary"
            />
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              By clicking Continue, you agree to our
            </Text>
            <Text style={styles.footerText}>
              <Text style={{color: colors.primary}}>Terms of Service</Text> and{' '}
              <Text style={{color: colors.primary}}>Privacy Policy</Text>.
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
    paddingTop: 38,
    gap: 20,
  },
  calenderIcon: {
    top: 20,
  },
  footer: {
    alignSelf: 'center',
    marginTop: 30,
  },
  footerText: {
    textAlign: 'center',
    fontFamily: fonts.dmsans_regular,
    fontSize: 12,
    lineHeight: 16,
    color: '#012224',
  },
});

export default MoreInfoScreen;
