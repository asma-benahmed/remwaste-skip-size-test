import { Header } from "./components/Header";
import { SkipsList } from "./components/skips-list";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-14 px-4">
      <Header />
      <SkipsList />
    </div>
  );
}

export default App;
