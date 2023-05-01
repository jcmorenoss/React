import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Card from "./ejemplo/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardB from "./CardB";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <Card apellido="Messi" nacimiento={1987} clubes={["Newels ", "Barcelona"]} mundial={true} late={false}/>
  <Card apellido="Ronaldo" nacimiento={1985} clubes={["Lisboa ", "Real Madrid"]} mundial={false} late={true}/> */}
  {/* <CardB onClick = {()=>console.log("Sumar")}/>
  <CardB onClick = {()=>console.log("Restar")}/> */}
  <CardB/>
  </>
);

