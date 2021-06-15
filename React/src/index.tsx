import ReactDOM from 'react-dom';
import React from 'react';
import Root from './root';
import configureStore from './store/store';
declare global {
    interface Window {
        currentUser?: any,
        dispatch?: any,
        getState?: any,
    }
}

// Listened for DOM content loading
document.addEventListener('DOMContentLoaded', () => {
    // Hook into static root div from rails views
    const root = document.getElementById('root');
    let store = configureStore();

    // Add state and dispatch to window for testing
    window.dispatch = store.dispatch;
    window.getState = store.getState;

    // Render root element with store in static root element
    ReactDOM.render(<Root store={store} compiler="TypeScript" framework="React" />, root);
})