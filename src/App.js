import { useState } from 'react'
import './App.css';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import LikeButton from './components/LikeButton'
import ClickablePicture from './components/ClickablePicture'
import Dice from './components/Dice'
const ids = require('./data/ids.json')
const maxence = require('./assets/images/maxence.png')
const maxenceGlasses = require('./assets/images/maxence-glasses.png')
const dice0 = require('./assets/images/dice-empty.png');
const dice1 = require('./assets/images/dice1.png');
const dice2 = require('./assets/images/dice2.png');
const dice3 = require('./assets/images/dice3.png');
const dice4 = require('./assets/images/dice4.png');
const dice5 = require('./assets/images/dice5.png');
const dice6 = require('./assets/images/dice6.png');

function App() {  
  const [dices, setDices] = useState([dice0, dice1, dice2, dice3, dice4, dice5, dice6])

  return (
    <div>
      <h1>Id Card</h1>
      <IdCard id={ids[0]} />
      <IdCard id={ids[1]} />
      <h1>Greetings</h1>
      <Greetings lang={'de'}>Ludwig</Greetings>
      <Greetings lang={'fr'}>François</Greetings>
      <h1>Random</h1>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      <h1>Box Color</h1>

      <h1>Like Button</h1>
      <LikeButton />
      <h1>Clickable Picture</h1>
      <ClickablePicture
        img={maxence}
        imgClicked={maxenceGlasses}
      />
      <h1>Dice</h1>
      <Dice dices={dices} />
    </div>
  )
}

export default App;
