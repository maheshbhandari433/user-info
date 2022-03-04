import { Link } from "react-router-dom"

const WebsiteURL =({data}) => {


return (
   <>
    
{data.map((card, index) => (

<div key={index}>

<p><Link to={`/links/${card.website}`}
>
{card.website}
        
</Link></p>

</div>
       
    )) }

    </>
    
    ) }



export default WebsiteURL