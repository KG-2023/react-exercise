import logo from './logo.svg';
import './App.css';
import Header from './components/Header';


/*********************************ROOT COMPONENT*******************/

function App() {
  const name = "Rodrigo Lopez"
  const x = true;
  return (
   
    <div className="container">
      <Header />
    </div>

   /*
   <>
     <header>
      <div className="header">
          <h1>Hello World! Welcome to Our First React</h1>
          <h2>Welcome {name} to our React Introductory Lessons</h2>
          <h2>I love JSX {x ? 'Yes' : 'No'} in JSX!</h2>
      </div>
     </header>
      <section>
        <div className="section1">
          <h2>Section 1</h2>
        </div>
      </section>
      <section>
        <div className="section2">
          <h2>Section 2</h2>
        </div>
      </section>
      <section>
        <div className="section3">
          <h2>Section 3</h2>
        </div>
      </section>
    </>
    */
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
