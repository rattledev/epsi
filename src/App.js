import './styles/App.css';
import {Card} from "./components/Card";
const tg = window.Telegram.WebApp;
function App() {

    return (
    <div className="App">
        {tg.initDataUnsafe?.user?.name}
        <Card/>
    </div>
  );
}

export default App;
