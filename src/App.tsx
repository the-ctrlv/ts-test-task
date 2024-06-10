import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import Form from "./components/Form";

function App() {
  const store = setupStore();

  return (
    <Provider store={store}>
      <div className="App">
        <Form />
      </div>
    </Provider>
  );
}

export default App;
