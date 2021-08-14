import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './components/scss/App.scss';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App></App>
  </StrictMode>, rootElement
);
