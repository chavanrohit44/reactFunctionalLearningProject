// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextForm';
function App() {
  return (
    <>
    {/* <Navbar title="Text App" home="HomePage" about= "About Us"/> */}
    <Navbar />
    <TextFrom heading="Javascript : Text to analyse" placeholderText="Enter the text here"/>
    </>
    
  );
}

export default App;
