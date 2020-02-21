import React from 'react';

import Layout from './components/Layout';
import FormContainer from './containers/FormContainer';
import RecordsContainer from './containers/RecordsContainer';

function App() {
  return <Layout form={<FormContainer />} table={<RecordsContainer />} />;
}

export default App;
