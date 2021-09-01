import { useParams} from 'react-router-dom'

const FullCard = ({data}) => {
    const { name } = useParams()
    return (
        <>


    {data.filter((card) => card.name === name).map((card,index) =>(
        <div key={index}>
        <p>Name: {JSON.stringify(card.name)}</p>
        <p>Username: {JSON.stringify(card.username)}</p>
        <p>Email: {JSON.stringify(card.email)}</p>
        <p>Phone: {JSON.stringify(card.phone)}</p>
        <p>Company {JSON.stringify(card.company)}</p>
        <p>Website: {JSON.stringify(card.website)}</p>
        <p>Address: {JSON.stringify(card.address)}</p>
        </div>
    ))}
        </>
    )
}

export default FullCard 