import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Config from './utils/config'

const loadConfig = async () => {
  try {
      // Fetch config.json
      const config_file = await fetch("/mnt/config.json");
      const config = await config_file.json();

      // map config in json to config class
      Object.keys(config).forEach((key) => {
          Config[key] = config[key];
      });
  } catch (e) {
      console.log(e);
  }
};

loadConfig().then(() => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});

