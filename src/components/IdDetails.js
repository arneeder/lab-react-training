export default function Details (props) {
    return (
        <div className="details">
            <p><span><strong>First Name: </strong></span><span>{props.details.firstName}</span></p>
            <p><span><strong>Last Name: </strong></span><span>{props.details.lastName}</span></p>
            <p><span><strong>Gender: </strong></span><span>{props.details.gender}</span></p>
            <p><span><strong>Height: </strong></span><span>{props.details.height}</span></p>
            <p><span><strong>Birth: </strong></span><span>{props.details.birth}</span></p>
        </div>
    )
}