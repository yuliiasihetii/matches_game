import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { startMatch } from '../features/matchesSlice';
import MatchesList from './MatchesList';

function MatchesField() {
    const {matchList, secondPlayerList} = useSelector((state) => state.matches);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(startMatch());
    },[])

    return (
        <>
            <MatchesList list={matchList}/>
            {matchList.length ? 
                <p className='text-center mt-4 text-zinc-500'>Total amount: {matchList.length}</p>
                : <h2 className='text-center text-4xl font-bold'>{secondPlayerList.length%2==0 ? 'You' : 'AI'} won</h2>
            }
        </>
    );
}
  
export default MatchesField;