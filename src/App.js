import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './styles/reset.css';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <div className='container'>
          <Header />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
