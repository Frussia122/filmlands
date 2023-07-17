import * as Yup from 'yup';


export const validationSchema = (type: string) => {
    return Yup.object().shape({
      email: Yup.string().email('Некорректный адрес электронной почты').required('Email обязателен'),
      password: Yup.string()
        .min(6, 'Пароль должен содержать не менее 6 символов')
        .required('Пароль обязателен')
        .matches(/^(?=.*[A-Z])/, 'Пароль должен содержать хотя бы одну заглавную букву')
        .matches(/^(?=.*\d)/, 'Пароль должен содержать хотя бы одну цифру')
        .matches(/^(?=.*[!@#$%^&*])/, 'Пароль должен содержать хотя бы один специальный символ')
        .test(
          'password',
          'Пароль должен содержать хотя бы одну заглавную букву, одну цифру и один специальный символ',
          (value) => /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/.test(value)
        ),
      agree: type === 'Sign Up' ? Yup.boolean().oneOf([true], 'Вы должны согласиться с условиями использования') : Yup.boolean(),
    });
  };
  
  export interface FormValues {
    email: string;
    password: string;
    agree?: boolean;
  }
  
  export const initialValues: FormValues = {
    email: '',
    password: '',
    agree: false,
  };
  
  export type LoginFormProps = {
    handleClick: (values: FormValues | Omit<FormValues, 'agree'>) => void;
    type: 'Sign Up' | 'Sign In';
  };