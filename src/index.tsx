import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./components/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
    <h1>Henry</h1>
  </Provider>,
  document.querySelector("#root")
);