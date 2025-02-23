import HomePage from "./presentation/views/Home";
import { HomeLayout } from "./presentation/layouts/Home";

function App() {
  return (
    <HomeLayout>
      <HomePage />
    </HomeLayout>
  );
}

export default App;
