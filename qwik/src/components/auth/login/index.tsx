import { component$, useSignal, $ } from "@builder.io/qwik";
import styles from "./login.module.css";

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
      <div class={`${styles.container} ${styles['container-center']}`}>
        <p class={styles.heading}>
          Log <span class={styles.highlight}>In</span>
        </p>
        {errorMessage.value && <pre class={styles.error}>{errorMessage.value}</pre>}
        {successMessage.value && <pre class={styles.success}>{successMessage.value}</pre>}
        <form onSubmit$={handleLogin} class={styles['login-form']}>
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
