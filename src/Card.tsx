import './App.css'

type Props = {
    name: string,
    pic: string,
    description: string,
    quote: string, 
    className?: string
}

function Card(props: Props) {

    return (
        <div className={'card ' + props.className}>
            <div className='profile-info'>
                <img alt="profile picture" src={props.pic}/>
                <div className='name-container'>
                    <p className='name'>{props.name}</p>
                    <p className='subtitle'>Verified Graduate</p>
                </div>
            </div>
            <p className='description'>{props.description}</p>
            <p className='quote'>" {props.quote} "</p>
      </div>
    );
}

export default Card;