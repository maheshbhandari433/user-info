import { Link } from 'react-router-dom'


const Card = ({data}) => {

    return (
       
        <>
        {data.map((card, index) => (
        <div className= 'card' key={index}>
        <p>{card.name[0]}</p> 
        <h3>{card.name}</h3>  
        <p>@{card.username}</p>
        <p>{card.website}</p>
         
        <Link to={`/cards/${card.name}`}>
          View details
          </Link>


         </div> )) }

    </>
    )
}

export default Card 