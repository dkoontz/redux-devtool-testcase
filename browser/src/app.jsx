import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.scss';
import React from 'react';
import Store from './Store';

Store.dispatch({ type: 'ChangedB', value: 'new value' });
Store.dispatch({ type: 'ChangedC', value: [100, 101] });
Store.dispatch({ type: 'ChangedA', value: { b: 'set via new A' } });

export default function render(props) {
  return (
    <div>
      <p>Look at the redux devtool</p>
    </div>
  );
}
