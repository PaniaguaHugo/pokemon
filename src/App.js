import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AppRouter from './AppRouter';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <NavBar />
        <SearchBar />
        <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
