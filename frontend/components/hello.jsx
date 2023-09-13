import { signal } from '@preact/signals'
import register from 'preact-custom-element'

function HelloWorld () {
  const count = signal(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <h1>Vite</h1>
        </a>
        <a href="https://shopify.dev/themes" target="_blank">
          <h1>Shopify</h1>
        </a>
      </div>
      <h1>Vite + Shopify</h1>
      <div class="card">
        <button onClick={() => count.value++}>
          count is {count}
        </button>
        <p>
          Edit <code>components/hello-world.jsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Shopify logos to learn more
      </p>
    </>
  )
}

register(HelloWorld, 'hello-shopify')