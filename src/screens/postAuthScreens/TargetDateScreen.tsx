import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {SafeAreaView} from 'react-native-safe-area-context';
import {z} from 'zod';
import CalenderIcon from '../../assets/icons/CalenderIcon';
import CircleBackIcon from '../../assets/icons/CircleBackIcon';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import ProgressBar from '../../components/ProgressBar';
import {useAppDispatch, useAppSelector} from '../../hooks/store';
import {createPlans} from '../../store/planSlice';
import {colors} from '../../theme/theme';
import {NavigationProps} from '../../types/navigators';
import {styles} from './GoalNameScreen';

const schema = z.object({
  maturity_date: z
    .string({
      required_error: 'Target date is required',
    })
    .min(1, 'Target date is required'),
});

type TargetDateSchema = z.infer<typeof schema>;

const TargetDateScreen = () => {
  const [date, setDate] = React.useState<Date>(new Date());
  const [open, setOpen] = React.useState(false);
  const plans = useAppSelector(state => state.plan);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProps>();
  const {control, setValue, setError, handleSubmit} = useForm<TargetDateSchema>(
    {
      defaultValues: {
        maturity_date: '',
      },
      resolver: zodResolver(schema),
    },
  );

  const onSubmit: SubmitHandler<TargetDateSchema> = () => {
    const oneYearFromNow = new Date(date.setFullYear(date.getFullYear() + 1));
    const now = new Date();

    if (oneYearFromNow.getFullYear() - now.getFullYear() <= 1) {
      setError('maturity_date', {
        message: 'Date must be minimum of one year from today',
      });
    }

    dispatch(createPlans({...plans, maturity_date: date.toString()}));
    navigation.navigate('Review');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Heading heading="Target date" icon={<CircleBackIcon />} />

      <ProgressBar questionuNumber={3} progressPercent="100%" />

      <View style={styles.formContainer}>
        <Text style={styles.formHeading}>When do you want to withdraw?</Text>

        <Controller
          name="maturity_date"
          control={control}
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <View>
              <View>
                <TextInput
                  style={[
                    styles.input,
                    {borderColor: error ? 'red' : colors.primary},
                  ]}
                  value={value}
                  onChangeText={onChange}
                  onPressIn={() => setOpen(true)}
                />

                <CalenderIcon style={screenStyles.calenderIcon} />
              </View>

              {error ? (
                <Text style={styles.error}>{error?.message}</Text>
              ) : null}
            </View>
          )}
        />
        <DatePicker
          modal
          open={open}
          date={date}
          mode="date"
          androidVariant="nativeAndroid"
          onConfirm={newDate => {
            setDate(newDate);
            setValue('maturity_date', newDate.toDateString());
            setOpen(false);
          }}
          onCancel={() => setOpen(false)}
        />

        <Button
          onPress={handleSubmit(onSubmit)}
          text="Continue"
          variant="primary"
        />
      </View>
    </SafeAreaView>
  );
};

const screenStyles = StyleSheet.create({
  calenderIcon: {
    position: 'absolute',
    top: 20,
    right: 15,
  },
});

export default TargetDateScreen;
