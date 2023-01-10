import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

export {default as Article}  from './components/article/Article';
export {default as Brand}  from './components/brand/Brand';
export {default as CTA}  from './components/cta/CTA';
export {default as Feature}  from './components/feature/Feature';
export {default as Navbar}  from './components/navbar/Navbar';

ReactDOM.render(<App />, document.getElementById('root'));