import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import GamesBlock from "./components/GamesBlock/GamesBlock";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import SteamPayment from "./components/SteamPayment/SteamPayment";
import GamePayment from "./components/GamePayment/GamePayment";
import Games from "./components/Games/Games";

function App() {
    return <div id="fullContent">
        <Router>
            <Routes>
                <Route path="/" element={<Body/>}/>
                <Route path="/games" element={<Games/>}/>
                <Route path="/steam" element={<SteamPayment/>}/>
                <Route path="/:gameId" element={<GamePayment/>}/>
            </Routes>
        </Router>
    </div>
}

export default App;

