import React, { useState, useEffect, createRef } from "react";
import './styles.css';

function App() {
  const [tipValue, setTip] = useState();
  const [billValue, setBill] = useState();
  var tip = '';
  const billRef = createRef(null);
  const findTip = (percentage) =>{
    var bill = billRef.current.value;
    tip= ((percentage * bill));
    setTip(tip);
    setBill(parseInt(bill) + parseInt(tip));
  }

  const customRef = createRef(null);
  const customTip = () =>{
    var bill = billRef.current.value;
    var percentage = customRef.current.value;
    tip= ((percentage * bill));
    setTip(tip);
    setBill(parseInt(bill) + parseInt(tip));
  }
  
  return (
    <div className="app">
      <div id="calculator">
      <section id="column-1">
      <form>
          <label htmlFor="bill"><h3 id="bill-label">Bill:</h3></label><br/>
          <input type="number" id="bill" name="bill" ref={billRef}/>
        </form>
        <div id='total'>
          <p>Tip Amount:</p>
          <p className='orange'>$ {tipValue}</p>
          <p>Bill Total:</p>
          <p className='orange'>$ {billValue}</p>
        </div>
        </section>
        <section id="column-2">
          <button onClick={() => findTip(.05)}>5%</button>
          <button onClick={() => findTip(.1)}>10%</button>
          <button onClick={() => findTip(.2)}>20%</button>
          <button onClick={() => findTip(.25)}>25%</button>
          <button onClick={() => findTip(.5)}>50%</button>
          <button onClick={() => customTip()}>Custom</button><br/>
          <label htmlFor="bill"><h3 id="bill-label" className='inline'>Custom Tip .?</h3></label>
          <input type="text" className='inline' id="customTip" name="bill" ref={customRef}/>
        </section>
      </div>
    </div>
  );
}

export default App;
