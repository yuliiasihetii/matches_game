import { useDispatch } from "react-redux";
import { startMatch } from "../features/matchesSlice";

function Header() {
  const dispatch = useDispatch()
    return (
      <div className="flex justify-between py-5 px-3">
        <h2 className="uppercase tracking-wider font-bold text-lg">Matches Game</h2>
        <button 
          className="bg-indigo-300 py-2 px-4 rounded tracking-wide hover:bg-indigo-200"
          onClick={()=>dispatch(startMatch())}
          >Restart the game
        </button>
      </div>
    );
}
  
export default Header;