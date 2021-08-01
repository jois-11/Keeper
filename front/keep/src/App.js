import './App.css'
import Header from "./components/Header/header"
import AddKeeper from "./components/Add/Add"
import ShowKeeper from "./components/show/showkeeper"
import { useState, useEffect } from "react"
import axios from "axios"

function App() {

    const [keeperList, setKeeperList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/api/getAll")
            .then(res => setKeeperList(res.data))
    }, [])

    return (
        <div className="App">
            <Header />
            <AddKeeper keeperList={keeperList} setKeeperList={setKeeperList} />
            <ShowKeeper keeperList={keeperList} setKeeperList={setKeeperList} />
        </div>
    );
}

export default App;