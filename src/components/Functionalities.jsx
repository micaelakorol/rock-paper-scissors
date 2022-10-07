import React from 'react'
import { useState } from 'react'
import Index from './Index'


const Functionalities = () => {
    let [score,setScore] = useState(0)
    let [selectIA,setSelectIA] = useState()
    let [result,setResult] = useState('')
    let [scoreIA, setScoreIA] = useState(0)
    
    //opciones:
    let options = [0,1,2];
    //seleccion de la maquina
    var selectionIA = null;
    
    const user = (electionUser) => {
     electionUser = parseInt(electionUser)
     selectionIA = random();
     setSelectIA(selectionIA)
    
    //si elijo piedra:
    if(electionUser === 0 && options[selectionIA] === 0){
     setResult('Tied')
    }if(electionUser === 0 && options[selectionIA] === 1){
      setResult('Oops..')
      setScoreIA(scoreIA +1)
    }if(electionUser === 0 && options[selectionIA] === 2){
      setResult('+1 point')
      setScore(score +1)
    }
    //Si elijo papel:
    if(electionUser === 1 && options[selectionIA] === 0){
      setResult('+1 point')
      setScore(score +1)
    }if(electionUser === 1 && options[selectionIA] === 1){
      setResult('Tied')
    }if(electionUser === 1 && options[selectionIA] === 2){
      setResult('Oops..')
      setScoreIA(scoreIA +1)
    }
    //si elijo tijera:
    if(electionUser === 2 && options[selectionIA] === 0){
      setResult('Oops..')
      setScoreIA(scoreIA +1)
    }if(electionUser === 2 && options[selectionIA] === 1){
      setResult('+1 point')
      setScore(score+1)
    }if(electionUser === 2 && options[selectionIA] === 2){
      setResult('Tied')
    }}
      
    const random = () =>{
    let opc = Math.trunc((Math.random() * 3))
    return opc;
}
    
     //funcion ganadora:
    const winner = () => {
        if(score === 5){
            alert('Ganaste!')
                setScore(0)
                    setScoreIA(0);
                        }}
winner()
  //funcion perdedora:  
    const loser = () => {
     if(scoreIA === 5){
        alert('Perdiste :(')
            setScoreIA(0)
                setScore(0)
                    }}
loser()
  return (
    <div>      
<Index score={score} selectIA={selectIA} result={result} user={user} scoreIA={scoreIA}/>
    </div>
  )
}

export default Functionalities