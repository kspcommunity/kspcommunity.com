import { component$, useSignal, $ } from "@builder.io/qwik";
import sharedStyles from "../auth.module.css";
import styles from "./login.module.css";
import { LuLogIn  } from "@qwikest/icons/lucide";

export default component$(() => {
  const email = useSignal('');
  const password = useSignal('');
  const successMessage = useSignal<string | null>(null);
  const errorMessage = useSignal<string | null>(null);
  const isLoading = useSignal(false);

  const handleLogin = $(async (event: Event) => {
    event.preventDefault();
    errorMessage.value = null;
    successMessage.value = null;
    isLoading.value = true;

    try {
      const response = await fetch("https://api.kspcommunity.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to log in. Please try again.");
      }

      successMessage.value = "Login successful!";
      email.value = '';
      password.value = '';
    } catch (error) {
      errorMessage.value = (error as Error).message;
    } finally {
      isLoading.value = false;
    }
  });

  return (
    <>
      <div class={`${sharedStyles.container} ${sharedStyles['container-center']} ${styles.container}`}>
        <p class={sharedStyles.heading}>
          <LuLogIn/> Log <span class={sharedStyles.highlight}>In</span>
        </p>
        {errorMessage.value && <pre class={sharedStyles.error}>{errorMessage.value}</pre>}
        {successMessage.value && <pre class={sharedStyles.success}>{successMessage.value}</pre>}
        <form onSubmit$={handleLogin} class={sharedStyles['auth-form']}>
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
            <button type="submit" disabled={isLoading.value}>Log In</button>
          </div>
          {isLoading.value && <p>Loading...</p>}
        </form>
      </div>
    </>
  );
});
