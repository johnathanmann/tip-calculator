import React, { useState, useRef } from "react";
import './styles.css';

function App() {
  const billRef = useRef(null);

  const [bill, setBill] = useState('');
  const findTip = (percentage) =>{
    setBill(billRef.current.value);
    console.log({bill})
    console.log({percentage})
    var tip= ((percentage / bill) * 100);
    console.log(tip)
  }
  

  return (
    <div className="app">
      <div id="calculator">
      <section id="column-1">
      <form>
          <label htmlFor="bill"><h3 id="bill-label">Bill:</h3></label><br/>
          <input type="text" id="bill" name="bill" ref={billRef}/>
        </form>
        <div id='total'>
          <p>Tip Amount:</p>
          <p className='orange'>$ Tip</p>
          <p>Bill Total:</p>
          <p className='orange'>$ Total</p>
        </div>
        </section>
        <section id="column-2">
          <button onClick={() => findTip(.05)}>5%</button>
          <button onClick={() => findTip(.1)}>10%</button>
          <button onClick={() => findTip(.2)}>20%</button>
          <button onClick={() => findTip(.25)}>25%</button>
          <button onClick={() => findTip(.5)}>50%</button>
          <button onClick={() => findTip(5)}>Custom</button><br/>
          <label htmlFor="bill"><h3 id="bill-label" className='inline'>Custom Tip%</h3></label>
          <input type="text" className='inline' id="customTip" name="bill"/>
        </section>
      </div>
    </div>
  );
}

export default App;
