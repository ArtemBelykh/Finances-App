import {Routes, Route} from "react-router-dom";
import Accounts from "./pages/Accounts/Accounts";
import Menu from "./components/Menu/Menu";
import Records from "./pages/Records/Records";
import Purposes from "./pages/Purposes/Purposes";
import Budget from "./pages/Budget/Budget";
import ScoresID from "./pages/ScoresID/ScoresID";

function App() {
    return (
        <div className="App">
            <Menu/>

            <div className="container">
                <Routes>
                    <Route path='/' element={<Accounts/>}/>
                    <Route path='/scores/:id' element={<ScoresID/>}/>
                    <Route path='/records' element={<Records/>}/>
                    <Route path='/purposes' element={<Purposes/>}/>
                    <Route path='/budget' element={<Budget/>}/>
                </Routes>
            </div>

        </div>
    );
}

export default App;
