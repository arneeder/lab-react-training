import Details from './IdDetails'
import Image from './IdImage'

export default function IdCard (props) {
    return (
        <div className='id'>
            <Image image={props.id.picture} />
            <Details details={props.id} />
        </div>
    )
}