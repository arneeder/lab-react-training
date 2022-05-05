import { useState } from 'react'

export default function LikeButton() {
    const [liked, setLiked] = useState(0)
    const [style, setStyle] = useState({backgroundColor: 'purple'})
    const handleClick = () => {
        const colors = ['purple','blue','green','yellow','orange','red']
        setLiked(liked + 1)
        setStyle({backgroundColor: colors[(liked % colors.length) + 1]})
    }
    return (
        <button style={style} onClick={handleClick}>{liked} Likes</button>
    )
}