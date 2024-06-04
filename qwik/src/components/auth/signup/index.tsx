import { component$, useSignal, $ } from "@builder.io/qwik";
import sharedStyles from "../auth.module.css";
import styles from "./signup.module.css";
import { LuContact } from "@qwikest/icons/lucide";

export default component$(() => {
  const username = useSignal('');
  const email = useSignal('');
  const password = useSignal('');
  const successMessage = useSignal<string | null>(null);
  const errorMessage = useSignal<string | null>(null);

  const handleSubmit = $(async (event: Event) => {
    event.preventDefault();
    errorMessage.value = null;
    successMessage.value = null;

    try {
      const response = await fetch("https://api.kspcommunity.com/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.value,
          email: email.value,
          password: password.value,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to sign up. Please try again.");
      }

      successMessage.value = "Signup successful!";
      username.value = '';
      email.value = '';
      password.value = '';
    } catch (error) {
      errorMessage.value = (error as Error).message;
    }
  });

  return (
    <>
      <div class={`${sharedStyles.container} ${sharedStyles['container-center']} ${styles.container}`}>
        <p class={sharedStyles.heading}>
            <LuContact/> Sign <span class={sharedStyles.highlight}>Up</span>
        </p>
        {errorMessage.value && <pre class={sharedStyles.error}>{errorMessage.value}</pre>}
        {successMessage.value && <pre class={sharedStyles.success}>{successMessage.value}</pre>}
        <form onSubmit$={handleSubmit} class={sharedStyles['auth-form']}>
          <div>
            <label for="username">Username:</label>
            <input
              id="username"
              type="text"
              value={username.value}
              onInput$={(e) => (username.value = (e.target as HTMLInputElement).value)}
              required
            />
          </div>
          <div>
            <label for="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email.value}
              onInput$={(e) => (email.value = (e.target as HTMLInputElement).value)}
              required
            />
          </div>
          <div>
            <label for="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password.value}
              onInput$={(e) => (password.value = (e.target as HTMLInputElement).value)}
              required
            />
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </>
  );
});
