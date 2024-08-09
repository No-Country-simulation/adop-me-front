import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (


    <BrowserRouter>
<HelmetProvider> 

      <AppRouter></AppRouter>

    </HelmetProvider>
    </BrowserRouter>
  );

}

export default App;
