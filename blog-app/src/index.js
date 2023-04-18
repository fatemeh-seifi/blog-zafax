import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ApolloClient , ApolloProvider , InMemoryCache} from "@apollo/client" ;
const client = new ApolloClient({
  uri:"https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clg6kvlpx0vwi01um2u1wgwlx/master" ,
  cache:new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  
);


