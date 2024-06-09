import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import {
  formAction$,
  type InitialValues,
  useForm,
  valiForm$,
} from '@modular-forms/qwik';
import * as v from 'valibot';
import styles from "../auth.module.css";

interface SignupResponse {
  status: 'success' | 'error';
  message: string;
  error?: string;
  data?: any;
}

const SignupSchema = v.object({
  email: v.pipe(
    v.string(),
    v.nonEmpty('Please enter your email.'),
    v.email('The email address is badly formatted.')
  ),
  password: v.pipe(
    v.string(),
    v.nonEmpty('Please enter your password.'),
    v.minLength(8, 'Your password must have 8 characters or more.')
  ),
});

type SignupForm = v.InferInput<typeof SignupSchema>;

export const useFormLoader = routeLoader$<InitialValues<SignupForm>>(() => ({
  email: '',
  password: '',
}));

export const usePostSignupAction = formAction$<SignupForm, SignupResponse>(
  async (props) => {
    console.log('usePostSignupAction', props);
    const { email, password } = props;

    try {
      const response = await fetch('https://api.kspcommunity.com/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!data.error) {
        // Success
        console.log('Signup submitted successfully:', data);
        return {
          status: 'success',
          message: 'Please check your email for verification.',
        };
      } else {
        // Failure
        console.error('Error submitting signup:', data.error);
        return {
          status: 'error',
          message: data.error,
        };
      }
    } catch (error) {
      console.error('Error submitting signup:', error);
      return {
        status: 'error',
        message: 'Error submitting signup',
      };
    }
  },
  valiForm$(SignupSchema)
);

export default component$(() => {
  const [signupForm, { Form, Field }] = useForm<SignupForm>({
    loader: useFormLoader(),
    action: usePostSignupAction(),
    validate: valiForm$(SignupSchema),
  });

  return (
    <>
      <section class={styles.section}>
        <p class={styles.heading}>Sign Up</p>
        <p class={styles.subheading}>
          Already have an account? <a href='/auth/login'>Login</a>
        </p>
        <Form class={styles.form}>
          <Field name="email">
            {(field, props) => (
              <>
                <input
                  {...props}
                  type='email'
                  placeholder='Enter your email'
                  class={styles.input}
                  required
                />
                {field.error && <div class={styles.error}>{field.error}</div>}
              </>
            )}
          </Field>
          <br />
          <Field name="password">
            {(field, props) => (
              <>
                <input
                  {...props}
                  type='password'
                  placeholder='Enter your password'
                  class={styles.input}
                  required
                />
                {field.error && <div class={styles.error}>{field.error}</div>}
              </>
            )}
          </Field>
          <br />
          <button
            type='submit'
            class={styles.submit}
            disabled={signupForm.submitting}
          >
            {signupForm.submitting ? 'Submitting...' : 'Submit'}
          </button>
        </Form>
        {signupForm.response?.status === 'error' && (
          <p class={styles.error}>{signupForm.response.message}</p>
        )}
        {signupForm.response?.status === 'success' && (
          <p class={styles.success}>{signupForm.response.message}</p>
        )}
      </section>
    </>
  );
});
