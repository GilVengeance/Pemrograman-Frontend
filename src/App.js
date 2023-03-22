import logo from './logo.svg';
import './App.css';

// Import semua komponen
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";


function App() {
  return(
    <div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default App;
