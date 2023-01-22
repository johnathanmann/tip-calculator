import './styles.css';

function App() {
  return (
    <div className="app">
      <div id="calculator">
      <section id="column-1">
      <form>
          <label for="fname">First name:</label><br/>
          <input type="text" id="fname" name="fname"/>
        </form>
        <div id='total'>
          <h2>Tip Amount:</h2>
          <h2>$ Tip</h2>
          <h2>Bill Total:</h2>
          <h2>$ Total</h2>
        </div>
        </section>
        <section id="column-2">
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
        </section>
      </div>
    </div>
  );
}

export default App;
