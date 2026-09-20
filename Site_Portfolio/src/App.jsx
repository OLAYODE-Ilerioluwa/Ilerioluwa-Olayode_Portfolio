import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from "./pages/Home";
import {Toaster} from "./compenents/ui/toaster.jsx"
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
    <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    
    </>
  );
}
export default App
