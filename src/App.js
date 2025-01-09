import './App.css';
import Wrapper from './components/wrapper.js';
import Screen from './components/screen.js';
import ButtonBox from "./components/buttonBox.js";
import Button from "./components/button.js";
import CalcProvider from "./context/CalcContext.js";

// Liste des boutons
const boutons = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="]
];

function App() {
  return (
    <CalcProvider>
      <Wrapper>

        <Screen/>

        <ButtonBox>
          {boutons.flat().map((btn, i) => (
            <Button
              value={btn}
              key={i}
            />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  )
}

export default App