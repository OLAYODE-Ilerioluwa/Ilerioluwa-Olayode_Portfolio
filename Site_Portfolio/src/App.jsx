import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from "./pages/Home";
import {Toaster} from "./compenents/ui/toaster.jsx"
import { NotFound } from "./pages/NotFound";
import { Analytics } from '@vercel/analytics/react';
import { Mention } from "./pages/Mention.jsx";
import { Confidentialite } from "./pages/Confidentialite.jsx";

function App() {
  return (
    <>
    <Toaster />
      <BrowserRouter>
        <Routes>
          <Route  index element={<Home />}/>
          <Route path="/mentions-legales" element={<Mention />} />
          <Route path="/confidentialite" element={<Confidentialite/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      <Analytics/>
    </>
  );
}
export default App
