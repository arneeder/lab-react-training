import { useState } from 'react'

export default function Dice(props) {
    const [dice, setDice] = useState(props.dices[0].default)
   
    const handleClick = () => {
        setDice(props.dices[Math.floor(Math.random()*6) + 1].default)
    }
    return (
        <img style={{width: '100px'}} src={dice} onClick={handleClick} alt="dice" />
    )
}