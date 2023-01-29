import './App.css';
import ListeDo from './Components/ListeDo';
import ContextProvider from './Components/ContextFolder/Context';

function App() {
  return (
    <div className="App">
      <ContextProvider>
      <ListeDo />
      </ContextProvider>
    </div>
  );
}

export default App;
