import { component$, useSignal } from '@builder.io/qwik';
import { Form, routeAction$ } from '@builder.io/qwik-city';

export const usePostSignupAction = routeAction$((props) => {
  console.log('usePostSignupAction', props);
  const { email, password } = props;
  console.log('email', email);
  console.log('password', password);
  const signupData = {
    email,
    password
  };
  fetch('https://api.kspcommunity.com/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signupData),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Signup submitted successfully:', data);
  })
  .catch(error => {
    console.error('Error submitting signup:', error);

  });
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
          onChange$={(e) =>
            (emailSignal.value = (e.target as HTMLInputElement).value)
          }
          value={emailSignal.value}
        />
        <input
          type='password'
          name='password'
          placeholder='Enter your password'
          required
          class='signup-input'
          onChange$={(e) =>
            (passwordSignal.value = (e.target as HTMLInputElement).value)
          }
          value={passwordSignal.value}
        />
        <button
          type='submit'
          class='signup-submit-btn'
          onClick$={() => {
            emailSignal.value = '';
            passwordSignal.value = '';
          }}>
          Submit
        </button>
      </Form>
    </section>
  );
});
