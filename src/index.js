import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter';
import HocCounter from './HocCounter';
import './App.css';
import './index.css';
import RenderCounter from './RenderCounter';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const Enhanced = HocCounter(Counter);

// root.render(<Enhanced />);

root.render(<RenderCounter render={props => <Counter {...props} />} />)