import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './App';

it('render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Menu />, div);
  ReactDOM.unmountComponentAtNode(div);
});
