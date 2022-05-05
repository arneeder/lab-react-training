import { useState } from 'react'

export default function ClickablePicture(props) {
    const [image, setImage] = useState(false)
    const handleClick = () => {
        setImage(!image)
        console.log(props)
    }
    return (
        <img onClick={handleClick} src={image ? props.imgClicked.default : props.img.default} alt="picture" />
    )
}