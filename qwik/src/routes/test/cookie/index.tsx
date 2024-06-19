/* eslint-disable qwik/no-use-visible-task */
import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

// Define the cookie interface
interface Cookie {
  get: (key: string) => CookieValue | null;
  set: (key: string, value: string | number | Record<string, any>, options?: CookieOptions) => void;
  delete: (key: string) => void;
  has: (key: string) => boolean;
}

interface CookieValue {
  value: string;
  json: <T = unknown>() => T;
  number: () => number;
}

interface CookieOptions {
  domain?: string;
  expires?: Date | string;
  httpOnly?: boolean;
  maxAge?: number | [number, 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks'];
  path?: string;
  sameSite?: 'lax' | 'none' | 'strict';
  secure?: boolean;
}

// Mock implementation of the Cookie interface (for demonstration purposes)
const cookie: Cookie = {
  get: (key: string) => {
    const value = document.cookie.split('; ').find(row => row.startsWith(`${key}=`))?.split('=')[1] || null;
    return value ? { 
      value, 
      json: () => {
        try {
          return JSON.parse(decodeURIComponent(value));
        } catch {
          return null;
        }
      }, 
      number: () => Number(value) 
    } : null;
  },
  set: (key: string, value: string | number | Record<string, any>, options?: CookieOptions) => {
    const cookieValue = typeof value === 'object' ? encodeURIComponent(JSON.stringify(value)) : encodeURIComponent(value.toString());
    let cookieString = `${key}=${cookieValue};`;
    
    if (options) {
      if (options.expires) {
        const expires = typeof options.expires === 'string' ? options.expires : options.expires.toUTCString();
        cookieString += ` expires=${expires};`;
      }
      if (options.path) {
        cookieString += ` path=${options.path};`;
      }
      if (options.domain) {
        cookieString += ` domain=${options.domain};`;
      }
      if (options.sameSite) {
        cookieString += ` SameSite=${options.sameSite};`;
      }
      if (options.secure) {
        cookieString += ` Secure;`;
      }
    }
    document.cookie = cookieString;
  },
  delete: (key: string) => {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
  },
  has: (key: string) => {
    return document.cookie.split('; ').some(row => row.startsWith(`${key}=`));
  }
};

export default component$(() => {
  const store = useStore({
    cookieValue: '',
    newCookieValue: ''
  });

  useVisibleTask$(() => {
    const storedCookie = cookie.get('my-cookie');
    if (storedCookie) {
      store.cookieValue = storedCookie.value;
    }
  });

  return (
    <>
      <div class="container container-center container-spacing-xl">
        <h1>Cookie R&D</h1>
        <p>We test cookies here</p>

        <div>
          <input 
            type="text" 
            placeholder="New cookie value" 
            value={store.newCookieValue} 
            onInput$={(e) => store.newCookieValue = (e.target as HTMLInputElement).value} 
          />
          <button onClick$={() => {
            cookie.set('my-cookie', store.newCookieValue, { expires: new Date(Date.now() + 86400000), path: '/' });
            store.cookieValue = store.newCookieValue;
          }}>Set Cookie</button>
          
          <button onClick$={() => {
            const retrievedCookie = cookie.get('my-cookie');
            store.cookieValue = retrievedCookie ? retrievedCookie.value : 'No cookie found';
          }}>Get Cookie</button>

          <button onClick$={() => {
            cookie.delete('my-cookie');
            store.cookieValue = 'Cookie deleted';
          }}>Delete Cookie</button>
        </div>

        <p>Cookie Value: {store.cookieValue}</p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Cookie test",
  meta: [
    {
      name: "description",
      content: "The cookie R&D page",
    },
  ],
};
