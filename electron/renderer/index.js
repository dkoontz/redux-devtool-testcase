'use strict';
const { ipcRenderer } = require('electron');
const task = require('../shared/task');

const { default: installExtension, REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

console.log("installing extensions");
installExtension(REDUX_DEVTOOLS)
.then((name) => console.log(`Added Extension: ${name}`))
.catch((err) => console.log('An error occurred: ', err));

const Store = require('./Store');

window.onload = function () {
	Store.dispatch({ type: 'ChangedB', value: 'new value' });
	Store.dispatch({ type: 'ChangedC', value: [100, 101] });
	Store.dispatch({ type: 'ChangedA', value: { b: 'set via new A' } });
};
