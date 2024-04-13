import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

interface User {
  id: string;
  name: string;
  age: string;
}

// Import dotenv and configure it to load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();

const API_ADDRESS = process.env.API_ADDRESS || 'localhost:3001';

export const useServerData = routeLoader$(async () => {
  const response = await fetch(`http://${API_ADDRESS}/api/users`, {
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
