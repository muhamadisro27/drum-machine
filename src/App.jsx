// import { useState } from 'react'
import Pad from './components/Pad';
import './App.css'

function App() {
  const pads = [
    {
      code : "q",
      alfabet : "Q",
      source : "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      name : "Heater 1",
    },
    {
      code : "w",
      alfabet : "W",
      source : "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      name : "Heater 2",
    },
    {
      code : "e",
      alfabet : "E",
      source : "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      name : "Heater 3",
    },
    {
      code : "a",
      alfabet : "A",
      source : "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      name : "Heater 4",
    },
    {
      code : "s",
      alfabet : "S",
      source : "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      name : "Clap",
    },
    {
      code : "d",
      alfabet : "D",
      source : "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      name : "Open-HH",
    },
    {
      code : "z",
      alfabet : "Z",
      source : "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      name : "Kick-n'-Hat",
    },
    {
      code : "x",
      alfabet : "X",
      source : "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      name : "Kick",
    },
    {
      code : "c",
      alfabet : "C",
      source : "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      name : "Closed-HH",
    },
  ];

  return (
    <>
      <Pad pads={pads} />
    </>
  )
}

export default App
