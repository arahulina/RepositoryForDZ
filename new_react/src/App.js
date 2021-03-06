import AnraFooter from "./components/Footer/AnraFooter";
import AnraHeader from "./components/Header/AnraHeader";
import PhoneBook from "./components/PhoneBook/PhoneBook";
import FormSignUp from "./components/Forms/Auth/FormSignUp";


function App() {
  return (
      <div className="App container">
        <AnraHeader></AnraHeader>
        <PhoneBook></PhoneBook>
        <AnraFooter></AnraFooter>
      </div>
  );
}

export default App;
