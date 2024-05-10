import { Provider } from "react-redux";
import "./App.css";
import { store } from "./app/store";
import Counter from "./redux/counter/counter";

function App() {
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
      
    </>
  );
}

export default App;
