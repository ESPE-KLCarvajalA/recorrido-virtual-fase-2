// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { HashRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd'


const originalWarn = console.warn;

console.warn = function (message, ...optionalParams) {
  if (typeof message === 'string' && message.includes('THREE.BufferGeometry.computeVertexNormals():') && message.includes('has normals facing inwards')) {
    return;
  }
  originalWarn.apply(console, [message, ...optionalParams]);
}


createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: '#006935',
          borderRadius: 2,

          // Alias Token
          colorBgContainer: '#f6ffed',
        },
      }}
    >
      <App />
    </ConfigProvider>
  </HashRouter>
)
