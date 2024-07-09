
import './App.css';
import { BrowserRouter } from "react-router-dom";
import {AppRouter} from "./AppRouter"
function App() {
  return (
    <BrowserRouter>
    <AppRouter></AppRouter>
  </BrowserRouter>
  );
}

export default App;
