import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./main.scss";
import Router from "./router/router";

function App() {
  return (
    <div className="container-background">
        <Router />
      </div>
  );
}

export default App;
