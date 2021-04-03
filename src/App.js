import { Route } from "react-router-dom";
import NewsContainer from "./contatiners/NewsContainer";

const App = () => {
  return <Route path="/:category?" component={NewsContainer} />;
};

export default App;
