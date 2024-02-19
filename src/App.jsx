import RoutesIndex from "./routes"
import './App.css'

import AuthProviderContext from './context/AuthProvider.jsx';

function App() {
  return (
    <AuthProviderContext>
      <RoutesIndex />
    </AuthProviderContext>
  )
}

export default App
