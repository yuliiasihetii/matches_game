import MatchItem from "./MatchItem"

function MatchesList({list}) {
    return(
        <div className='flex flex-wrap gap-1'>
        {
            list.map(i => 
                <MatchItem key={i.id} item={i}/>  
        )}   
        </div>
    )
}

export default MatchesList