import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";
import FourthComponent from "./components/FourthComponent";
import { SimpleContextProvider } from "./state/FirstExample-SimpleContext";
import { ComplexContextProvider } from "./state/SecondExample-ComplexContext";

function App() {
  return (
    <div className='App'>
      <SimpleContextProvider>
        <div style={{ width: "100%" }}>
          <FirstComponent />
          <SecondComponent />
        </div>
      </SimpleContextProvider>
      <br />
      <ComplexContextProvider>
        <div style={{ width: "100%" }}>
          <ThirdComponent />
          <FourthComponent />
        </div>
      </ComplexContextProvider>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
