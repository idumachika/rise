/* eslint-disable react-native/no-inline-styles */
import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {z} from 'zod';
import CircleBackIcon from '../../assets/icons/CircleBackIcon';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import ProgressBar from '../../components/ProgressBar';
import {useAppDispatch, useAppSelector} from '../../hooks/store';
import {createPlans} from '../../store/planSlice';
import {colors} from '../../theme/theme';
import {NavigationProps} from '../../types/navigators';
import {styles} from './GoalNameScreen';

const schema = z
  .object({
    target_amount: z
      .string({
        required_error: 'Target amount is required',
      })
      .min(1, 'Target amount is required'),
  })
  .refine(value => parseInt(value.target_amount) >= 10000, {
    message: 'Target amount cannot be less than N10,000',
    path: ['target_amount'],
  });

type TargetAmountSchema = z.infer<typeof schema>;

const TargetAmountScreen = () => {
  const navigation = useNavigation<NavigationProps>();
    console.log('navigation', navigation);

  const plans = useAppSelector(state => state.plan);
  const dispatch = useAppDispatch();
  const {control, handleSubmit} = useForm<TargetAmountSchema>({
    defaultValues: {
      target_amount: '',
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<TargetAmountSchema> = data => {
    dispatch(createPlans({...plans, target_amount: data.target_amount}));
    navigation.navigate('TargetDate');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Heading heading="Target amount" icon={<CircleBackIcon />} />

      <ProgressBar questionuNumber={2} progressPercent="66.66%" />

      <View style={styles.formContainer}>
        <Text style={styles.formHeading}>How much do you need?</Text>

        <Controller
          name="target_amount"
          control={control}
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <View>
              <TextInput
                style={[
                  styles.input,
                  {borderColor: error ? 'red' : colors.primary},
                ]}
                value={value}
                onChangeText={onChange}
                keyboardType="numeric"
              />

              {error ? (
                <Text style={styles.error}>{error?.message}</Text>
              ) : null}
            </View>
          )}
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

export default TargetAmountScreen;
