import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './features/store/store.js'
import { Toaster, toast } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      /> */}
      <Toaster
        position="top-center"  // ✅ Changed from top-right to top-center
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
            borderRadius: '8px',
            padding: '16px 24px',
            fontWeight: '500',
            textAlign: 'center',  // ✅ Center text
            minWidth: '300px',  // ✅ Better width
          },
          success: {
            style: {
              background: '#10b981',
            },
          },
          error: {
            style: {
              background: '#ef4444',
            },
          },
        }}
      />

      <App />
    </Provider>
  </StrictMode >
)
