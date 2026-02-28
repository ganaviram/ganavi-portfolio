import { AnimatePresence } from "framer-motion";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />      
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <AppRouter />
        </AnimatePresence>
      </main>
    </>
  );
}
