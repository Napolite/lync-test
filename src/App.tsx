import "./App.css";
import AddExpenses from "./components/addExpenses";
import Header from "./components/header";
import Dashboard from "./screens/dashboard";

function App() {
  return (
    <div className="w-full h-auto pb-[20px]">
      <div className="w-[70%] mx-auto ">
        <Header />
      </div>
      <Dashboard />
      <AddExpenses />
    </div>
  );
}

export default App;
