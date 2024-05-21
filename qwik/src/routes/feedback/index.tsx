import { component$, useSignal } from '@builder.io/qwik';
import { Form, routeAction$ } from '@builder.io/qwik-city';

export const usePostFeedbackAction = routeAction$((props) => {
  console.log('usePostFeedbackAction', props);
  const { name, email, message } = props;
  console.log('name', name);
  console.log('email', email);
  console.log('message', message);
  const feedback = {
    name,
    email,
    message
  };
  fetch('https://api.kspcommunity.com/api/feedback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(feedback),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Feedback submitted successfully:', data);
    // Handle success response if needed
  })
  .catch(error => {
    console.error('Error submitting feedback:', error);
    // Handle error if needed
  });
});

export default component$(() => {
  const nameSignal = useSignal('');
  const emailSignal = useSignal('');
  const messageSignal = useSignal('');

  const postFeedbackAction = usePostFeedbackAction();
  return (
    <section class='feedback-section'>
      <Form action={postFeedbackAction}>
        <input
          type='text'
          name='name'
          placeholder='Enter your name'
          required
          class='feedback-input'
          onChange$={(e) =>
            (nameSignal.value = (e.target as HTMLInputElement).value)
          }
          value={nameSignal.value}
        />
        <input
          type='email'
          name='email'
          placeholder='Enter your email'
          required
          class='feedback-input'
          onChange$={(e) =>
            (emailSignal.value = (e.target as HTMLInputElement).value)
          }
          value={emailSignal.value}
        />
        <textarea
          name='message'
          placeholder='Enter your feedback'
          required
          class='feedback-textarea'
          onChange$={(e) =>
            (messageSignal.value = (e.target as HTMLTextAreaElement).value)
          }
          value={messageSignal.value}
        ></textarea>
        <button
          type='submit'
          class='feedback-submit-btn'
          onClick$={() => {
            nameSignal.value = '';
            emailSignal.value = '';
            messageSignal.value = '';
          }}>
          Submit
        </button>
      </Form>
    </section>
  );
});
