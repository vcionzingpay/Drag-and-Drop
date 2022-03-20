import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { MainPage } from "./components/mainPage";
function App() {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <MainPage />
      </DndProvider>
    </div>
  );
}

export default App;
