import { useDispatch, useSelector } from "react-redux";
import { removeSelectedItems } from "../features/matchesSlice";
import MatchItem from "./MatchItem";
import MatchesList from "./MatchesList";

function SecondPlayer() {
  const secondPlayerList = useSelector(state => state.matches.secondPlayerList)
  const dispatch = useDispatch();

  return (
      <div className="mt-16">
        <div className="flex gap-10 justify-center">
          <button 
            className="bg-indigo-300 py-2 px-4 rounded tracking-wide hover:bg-indigo-200"
            onClick={()=> dispatch(removeSelectedItems(1))}
            >1
          </button>
          <button 
            className="bg-indigo-300 py-2 px-4 rounded tracking-wide hover:bg-indigo-200"
            onClick={()=> dispatch(removeSelectedItems(2))}
            >2
          </button>
          <button 
            className="bg-indigo-300 py-2 px-4 rounded tracking-wide hover:bg-indigo-200"
            onClick={()=> dispatch(removeSelectedItems(3))}
            >3
          </button>
        </div>
        <p className="text-center mt-3 text-zinc-400">Please select an amount of matches you want to get.</p>
        <div className="flex mt-10">
          <div className="w-1/5 flex justify-center items-center">
            <span className="bg-indigo-300 p-4 rounded-full w-16">YOU</span>
          </div>
          <MatchesList className="w-4/5" list={secondPlayerList}/>
        </div>
        <div className="text-center text-zinc-500">
            <p>Total amount: {secondPlayerList.length}</p>
        </div>
      </div>
    );
}
  
export default SecondPlayer;