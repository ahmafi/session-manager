import React from 'react';
import ReactDOM from 'react-dom';
import browser from 'webextension-polyfill';
import TabsList from './components/TabsList';
import './app.css';

const Popup = () => {
  return (
    <div className="">
      <TabsList />
    </div>
  );
};

browser.tabs.query({ active: true, currentWindow: true }).then(() => {
  ReactDOM.render(<Popup />, document.getElementById('root'));
});
