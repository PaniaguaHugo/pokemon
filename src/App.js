import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AppRouter from './AppRouter';

function App() {
  return (
    <div className="App">
      <NavBar />
        <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
