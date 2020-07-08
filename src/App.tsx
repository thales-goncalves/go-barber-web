import React from 'react';

import { AuthProvider } from './hooks/AuthContext';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <SignIn />
    </AuthProvider>
  );
};

export default App;
