import { component$, useSignal } from '@builder.io/qwik';
import { Form, routeAction$ } from '@builder.io/qwik-city';
import styles from "../auth.module.css";

interface SignupResponse {
  error?: string;
  [key: string]: any;
}

export const usePostSignupAction = routeAction$(async (props): Promise<SignupResponse> => {
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
    if (!data.error) {      //Success
      console.log('Signup submitted successfully:', data);
      return { error: "Please check your email for verification." };
    } else {    //Failure
      console.error('Error submitting signup:', data.error);
      return { error: data.error };
    }
  } catch (error) {
    console.error('Error submitting signup:', error);
    return { error: 'Error submitting signup' };
  }
});

export default component$(() => {
  const emailSignal = useSignal('');
  const passwordSignal = useSignal('');

  const postSignupAction = usePostSignupAction();
  return (
    <>
      <section class={styles.section}>
      <p class={styles.heading}>Sign Up</p>
      <p class={styles.subheading}>Already have an account? <a href='/auth/login'>Login</a></p>
        <Form action={postSignupAction} class={styles.form}>
          <input
            type='email'
            name='email'
            placeholder='Enter your email'
            required
            class={styles.input}
            onChange$={(e) => (emailSignal.value = (e.target as HTMLInputElement).value)}
            value={emailSignal.value}
          />
          <br />
          <input
            type='password'
            name='password'
            placeholder='Enter your password'
            required
            class={styles.input}
            onChange$={(e) => (passwordSignal.value = (e.target as HTMLInputElement).value)}
            value={passwordSignal.value}
          />
          <br />
          <button
            type='submit'
            class={styles.submit}>
            Submit
          </button>
        </Form>
        {postSignupAction.value?.error && <p>{postSignupAction.value.error}</p>}
      </section>
    </>
  );
});