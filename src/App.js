import './styles.css';

function App() {
  return (
    <div className="app">
      <div id="calculator">
      <section id="column-1">
      <form>
          <label htmlFor="bill"><h3 id="bill-label">Bill:</h3></label><br/>
          <input type="text" id="bill" name="bill"/>
        </form>
        <div id='total'>
          <p>Tip Amount:</p>
          <p className='orange'>$ Tip</p>
          <p>Bill Total:</p>
          <p className='orange'>$ Total</p>
        </div>
        </section>
        <section id="column-2">
          <button>5%</button>
          <button>10%</button>
          <button>20%</button>
          <button>25%</button>
          <button>50%</button>
          <button>Custom</button>
        </section>
      </div>
    </div>
  );
}

export default App;
