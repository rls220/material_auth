import React from 'react';
import Routes from "./routes/Routes";

import { configureFakeBackend } from './helpers/fakeBackend';

configureFakeBackend();
function App() {
  return <Routes />
}

export default App;
