import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBI9lta2lqtFNisOIh6OcMjU5IkuuPhMyM';

 const App = function(){
   return (<div>
<SearchBar />
   </div>);
}

ReactDOM.render(<App />, document.querySelector('.container'));
