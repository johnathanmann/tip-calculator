import './styles.css';

function App() {
  function findTip(percentage){
    console.log(percentage)
  }
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
          <button onClick={findTip(5)}>5%</button>
          <button onClick={findTip(10)}>10%</button>
          <button onClick={findTip(20)}>20%</button>
          <button onClick={findTip(25)}>25%</button>
          <button onClick={findTip(50)}>50%</button>
          <button onClick={findTip()}>Custom</button><br/>
          <label htmlFor="bill"><h3 id="bill-label" className='inline'>Custom Tip%</h3></label>
          <input type="text" className='inline' id="customTip" name="bill"/>
        </section>
      </div>
    </div>
  );
}

export default App;
