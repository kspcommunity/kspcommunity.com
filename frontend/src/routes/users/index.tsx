import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

interface User {
  id: string;
  name: string;
  age: string;
}

export const useServerData = routeLoader$(async () => {
  const response = await fetch('http://localhost:1234/api/users', {
    headers: { Accept: 'application/json' },
  });
  return await response.json() as User[];
});
 
export default component$(() => {
  const serverData = useServerData();
  return (
    <section class="section bright">
      <ul>
        {serverData.value.map(user => (
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
          </li>
        ))}
      </ul>
    </section>
  );
});
