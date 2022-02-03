import logo from './logo.svg'
import './App.css'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'
import FourthComponent from './components/FourthComponent'
import FirstReduxComponent from './components/FirstReduxComponent'
import SecondReduxComponent from './components/SecondReduxComponent'
import { SimpleContextProvider } from './state/FirstExample-SimpleContext'
import { ComplexContextProvider } from './state/SecondExample-ComplexContext'
import FirstRxjsComponent from './components/FirstRxjsComponent'
import SecondRxjsComponent from './components/SecondRxjsComponent'
import FirstMobxComponent from './components/mobx/FirstComponent'
import SecondMobxComponent from './components/mobx/SecondComponent'
import userStore from './state/FifthExample-Mobx/user.store'

function App() {
  return (
    <div className="App">
      {/* <FirstRxjsComponent />
      <SecondRxjsComponent />
      <FirstReduxComponent />
      <SecondReduxComponent />
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
      </ComplexContextProvider> */}
      <FirstMobxComponent userState={userStore} />
      <SecondMobxComponent userState={userStore} />
    </div>
  )
}

export default App
