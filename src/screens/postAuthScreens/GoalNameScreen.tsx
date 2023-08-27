/* eslint-disable react-native/no-inline-styles */
import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {z} from 'zod';
import CircleBackIcon from '../../assets/icons/CircleBackIcon';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import ProgressBar from '../../components/ProgressBar';
import {useAppDispatch, useAppSelector} from '../../hooks/store';
import {createPlans} from '../../store/planSlice';
import {colors, fonts} from '../../theme/theme';
import {NavigationProps} from '../../types/navigators';

const schema = z.object({
  plan_name: z
    .string({
      required_error: 'Plan name is required',
    })
    .min(1, 'Plan name is required'),
});

type GoalNameSchema = z.infer<typeof schema>;

const GoalNameScreen = () => {
  const navigation = useNavigation<NavigationProps>();
    console.log('navigation', navigation);

  const plans = useAppSelector(state => state.plan);
  const dispatch = useAppDispatch();
  const {control, handleSubmit} = useForm<GoalNameSchema>({
    defaultValues: {
      plan_name: '',
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<GoalNameSchema> = data => {
    dispatch(createPlans({...plans, plan_name: data.plan_name}));
    navigation.navigate('TargetAmount');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Heading heading="Goal name" icon={<CircleBackIcon />} />

      <ProgressBar questionuNumber={1} progressPercent="33.33%" />

      <View style={styles.formContainer}>
        <Text style={styles.formHeading}>What are you saving for</Text>

        <Controller
          name="plan_name"
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

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  formContainer: {
    paddingTop: 64,
    gap: 14,
  },
  formHeading: {
    fontSize: 17,
    lineHeight: 22,
    fontFamily: fonts.dmsans_bold,
    color: '#222222',
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderColor: colors.primary,
    borderRadius: 5,
    borderWidth: 2,
    color: '#292F33',
    fontSize: 15,
    lineHeight: 20,
    fontFamily: fonts.dmsans_bold,
  },
  error: {
    fontFamily: fonts.dmsans_regular,
    fontSize: 12,
    lineHeight: 16,
    color: 'red',
    paddingHorizontal: 10,
    paddingTop: 3,
  },
});
export default GoalNameScreen;
