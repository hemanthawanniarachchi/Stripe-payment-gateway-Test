import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Payment from "./components/Payment";
import Refund from "./components/Refund";

import "./styles/payment.css"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Homepage />} />
            <Route path="payment/" element={<Payment />} />
            <Route path="refund/" element={<Refund />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
