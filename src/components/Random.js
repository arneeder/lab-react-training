export default function Random(props) {
    console.log(props);
    const randomNumber = Math.floor(Math.random() * (props.max - props.min) + props.min)
    return(
        <p className="id">Random value between {props.min} and {props.max}: {randomNumber}</p>
    )
};
