
import { createContext, useState } from 'react';
import './App.css';
import Cake from './Page/Cake/Cake';
export const DecoContext = createContext();
function App() {
  const [dropDownCount, setDropDownCount] = useState([]);
  const [decoRow, setDecoRow] = useState([]);
  console.log(decoRow);
  return (
    <DecoContext.Provider value={{
      dropDownProp: [dropDownCount, setDropDownCount],
      decoRowProp: [decoRow, setDecoRow]
    }}>
      <Cake></Cake>
    </DecoContext.Provider>
  );
}

export default App;
