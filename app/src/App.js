import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd";
import axios from "axios";
import dotenv from "dotenv";
import React, { useState } from 'react';
dotenv.config();

function App() {
  const [work, setWork] = useState(0);
  const [data, setData] = useState(0);
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Button onClick={()=>{
          axios
          .get(`http://${process.env.REACT_APP_SERVER_IP}/test1`)
          .then((res) => {
            console.log(res);
            setWork(res.data)
          });

        }} type="primary">Test Connection </Button>is working?: {work}
        <br/>
        <Button onClick={()=>{
          axios
          .get(`http://${process.env.REACT_APP_SERVER_IP}/testdb`)
          .then((res) => {
            console.log(res.data);
            setData(res.data[0].firstname)
          });

        }} type="primary">Test DataBase  </Button>my name is ?: {data}
      </header>
    </div>
  );
}

export default App;
