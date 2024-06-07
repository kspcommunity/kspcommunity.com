import { component$, useSignal } from '@builder.io/qwik';
import { Form, routeAction$ } from '@builder.io/qwik-city';

interface LoginResponse {
  error?: string;
  [key: string]: any;
}

export const usePostLoginAction = routeAction$(async (props): Promise<LoginResponse> => {
  console.log('usePostLoginAction', props);
  const { email, password } = props;

  try {
    const response = await fetch('https://api.kspcommunity.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (!data.error) {      // Success
      console.log('Login submitted successfully:', data);
      return { success: 'Login successful!' };
    } else {                // Failure
      console.error('Error submitting login:', data.error);
      return { error: data.error };
    }
  } catch (error) {
    console.error('Error submitting login:', error);
    return { error: 'Error submitting login' };
  }
});

export default component$(() => {
  const emailSignal = useSignal('');
  const passwordSignal = useSignal('');

  const postLoginAction = usePostLoginAction();
  return (
    <section class='login-section'>
      <Form action={postLoginAction}>
        <input
          type='email'
          name='email'
          placeholder='Enter your email'
          required
          class='login-input'
          onChange$={(e) => (emailSignal.value = (e.target as HTMLInputElement).value)}
          value={emailSignal.value}
        />
        <br />
        <input
          type='password'
          name='password'
          placeholder='Enter your password'
          required
          class='login-input'
          onChange$={(e) => (passwordSignal.value = (e.target as HTMLInputElement).value)}
          value={passwordSignal.value}
        />
        <br />
        <button
          type='submit'
          class='login-submit-btn'>
          Submit
        </button>
      </Form>
      {postLoginAction.value?.error && <p>{postLoginAction.value.error}</p>}
      {postLoginAction.value?.success && <p>{postLoginAction.value.success}</p>}
    </section>
  );
});
