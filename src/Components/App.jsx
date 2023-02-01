import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
function App() {
  const [count, setC] = useState(0);
  const [total, setTotal] = useState(0);
  const [num, setNum] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  return (
    <div>
      <Header />
      <div className="fullpage">
        <div className="page">
          <Note
            num={num}
            setNum={setNum}
            sub={subtotal}
            setSub={setSubtotal}
          /></div></div><br /><br />
      <div>
        <footer>
          <div className="center">
            <button id='addproduct' onClick={() => { setTotal(Number(subtotal)); setC(Number(num)); }}>Add Products</button>
          </div>
          <p>{Number(count) === 1 ? Number(count) + " Product Selected" : Number(count) + " Products Selected"} <div className="divider">|</div> <span id="span">Total Price</span> ₹<>{total}</></p>
        </footer>
      </div>
    </div>
  );
}

export default App;
