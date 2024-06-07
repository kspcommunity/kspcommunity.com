import { component$, useSignal } from '@builder.io/qwik';
import { Form, routeAction$ } from '@builder.io/qwik-city';

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
    <section class='signup-section'>
      <Form action={postSignupAction}>
        <input
          type='email'
          name='email'
          placeholder='Enter your email'
          required
          class='signup-input'
          onChange$={(e) => (emailSignal.value = (e.target as HTMLInputElement).value)}
          value={emailSignal.value}
        />
        <br />
        <input
          type='password'
          name='password'
          placeholder='Enter your password'
          required
          class='signup-input'
          onChange$={(e) => (passwordSignal.value = (e.target as HTMLInputElement).value)}
          value={passwordSignal.value}
        />
        <br />
        <button
          type='submit'
          class='signup-submit-btn'>
          Submit
        </button>
      </Form>
      {postSignupAction.value?.error && <p>{postSignupAction.value.error}</p>}
    </section>
  );
});