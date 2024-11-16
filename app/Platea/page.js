import React from "react";
import Platea from "../../components/Platea";
import GroupComponent from "../../components/Footer"; 
import '../global.css';
import styles from '../index.module.css';
import Header from "../../components/header"


function App() {
  return (
    <div className={styles.climatic}> 
    <Header/>
      <Platea/>
      <GroupComponent /> 
    </div>
  );
}

export default App;
