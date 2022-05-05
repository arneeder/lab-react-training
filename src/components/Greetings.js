

export default function Greetings(props) {
    const name = props.children
    let greeting = ''
    switch (props.lang) {
        case 'de':
            greeting = 'Hallo';
            break;
        case 'en':
            greeting = "Hello";
            break;
        case 'es':
            greeting = 'Hola';
            break;
        case 'fr':
            greeting = 'Bonjour';
            break;
        default:
            greeting = 'unknown, hi I guess';
    }
    return (
        <p className="id">{greeting} {name}</p>
    )
};
