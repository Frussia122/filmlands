// LoginForm.tsx
import { Formik, FormikHelpers } from 'formik';
import {
   Wrapper, 
  Title, 
  FieldsList, 
  AuthField, 
  FieldWrapper, 
  CustomCheckbox, 
  Error,
  Button } from './styled';
import {LoginFormProps, FormValues, initialValues, validationSchema} from './configuration';


const LoginForm: React.FC<LoginFormProps> = ({ handleClick, type }) => {

  const handleSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    if(type === 'Sign In') {
      const {agree, ...loginData} = values;
      handleClick(loginData);
    } else {
      handleClick(values);
    }
    setSubmitting(false);
  };


  const validation = validationSchema(type)
  return (
    <Wrapper>
      <Formik 
        initialValues={initialValues} 
        validationSchema={type === 'Sign In' ? null : validation}
        onSubmit={handleSubmit}
        >
        <FieldsList>
        <Title>{type}</Title>
          <FieldWrapper>
            <AuthField type="email" id="email" name="email" placeholder="email"/>
            {<Error name="email" component="div" />}
          </FieldWrapper>
          <FieldWrapper>
            <AuthField type="password" id="password" name="password" placeholder="password"/>
            {<Error name="password" component="div" />}
          </FieldWrapper>

          {type === "Sign Up" && 
            <FieldWrapper>
              <CustomCheckbox htmlFor="agree">
                <AuthField type="checkbox" id="agree" name="agree" />
                Я согласен с условиями использования
              </CustomCheckbox>
              {<Error name="agree" component="div" />}
            </FieldWrapper>
          }

          <Button type="submit">{type}</Button>
        </FieldsList>
      </Formik>
    </Wrapper>
  );
};

export default LoginForm;