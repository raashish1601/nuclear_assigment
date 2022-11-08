import "./styles.css";
import "./componenets/Form";
import Form from "./componenets/Form";
import Table from "./componenets/Table";
import Dashboard from "./componenets/Dashboard";
import Navbar from "./componenets/Navbar";
import Header from "./componenets/Header";
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      {/* <h1 className=" font-bold ">Hello CodeSandbox</h1> */}
      {/* <h2>Start editing to see some magic happen!</h2> */}

      <Navbar />
      <Header />
      <Switch>
        <Route path="/table" component={Table} />
        <Route path="/form" component={Form} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </div>
  );
}
