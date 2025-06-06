import { Header } from "./components/Header";
import { SkipsList } from "./components/skips-list";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-700 py-12 w-full">
      <Header />
      <SkipsList />
    </div>
  );
}

export default App;
