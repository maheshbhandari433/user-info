import { Link } from 'react-router-dom'
const Card = ({data}) => {
    return (
       
        <>
         {data.map((card, index) => (
           <div key={index}>
          <h3>{card.name}</h3>  
          <p>{card.username}</p>
          <p>{card.website}</p>
          <Link to={`/cards/${card.name}`}>View Details</Link>
           </div> )) }

    </>
    )
}

export default Card 