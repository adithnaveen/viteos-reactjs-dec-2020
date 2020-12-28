import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// import LazyComponent from './LazyComponent';

const LazyComponent = React.lazy(() => import('./LazyComponent')); 



// ReactDOM.render(
//     <App />, 
//   document.getElementById('root')
// );
 

// https://reactjs.org/docs/code-splitting.html
ReactDOM.render(
    <div>
      <Suspense fallback={<div>Loading Please Wait... </div>}>
        <LazyComponent/>
      </Suspense>
    </div>
  , document.getElementById("root")); 

