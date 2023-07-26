import "devextreme/dist/css/dx.dark.css";

import "./App.css";
import HookComponentApp from "./HookComponentApp";
import ClassComponentApp from "./ClassComponentApp";

function App() {
  return (
    <>
      <h2>Using Hooks</h2>
      <HookComponentApp />
      <h2>Using Classes</h2>
      <ClassComponentApp />
    </>
  );
}

export default App;
