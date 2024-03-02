import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './index.css';
// import CounterApp from './01-useState/CounterApp.jsx';
// import CounterWithCustomHook from './02-useCounter/CounterWIthCustomHook.jsx';
// import { SimpleForm } from './03-useEffect/SimpleForm.jsx';
// import { FormWithCustomHook } from './03-useEffect/FormWithCustomHook.jsx';
// import MultipleCustomHooks from './04-useFetch/MultipleCustomHooks.jsx';
import { FocusScreen } from './05-useRef/FocusScreen.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FocusScreen />
  </React.StrictMode>,
);
