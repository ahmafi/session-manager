import * as React from 'react';
import * as ReactDOM from 'react-dom';
import browser from 'webextension-polyfill';
import SessionsList from './components/SessionsList';
import './app.css';

const Sessions = () => {
  return (
    <div>
      <SessionsList />
    </div>
  );
};

browser.tabs.query({ active: true, currentWindow: true }).then(() => {
  ReactDOM.render(<Sessions />, document.getElementById('root'));
});
