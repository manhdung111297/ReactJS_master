
import './App.css';
import { AppProvider } from './components/Context/AppContext';
import Router from './components/Router';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter >
      <AppProvider>
        <Router />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
