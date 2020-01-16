import React, {useEffect, useState} from 'react';
import api from "./services/api";

import DevItem from "./components/DeviItem/index"
import DevForm from "./components/DevForm"
import './global.css';
import './App.css';
import "./SideBar.css";
import "./Main.css";


function App() {

  const [devs, setDevs] = useState([]);
  
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get(`/devs`);
      setDevs(response.data)
    }
    loadDevs();
  }, []);

  async function handleAddDev(data) {

    const response = await api.post(`/devs`,data)
    
    setDevs([...devs, response.data]);
  }

  return (
    <div id ="App">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSumbit={handleAddDev}/>
      </aside>
      <main>
        <ul>{ devs.map(dev => ( <DevItem key={dev._id} dev={dev}/> )) }</ul>
      </main>
    </div>
  );
}

export default App;