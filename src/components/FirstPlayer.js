import { useSelector } from "react-redux";
import MatchesList from "./MatchesList";

function FirstPlayer() {
  const firstPlayerList = useSelector(state => state.matches.firstPlayerList)
    return (
      <div className="my-16">
      <div className="flex">
        <div className="w-1/5 flex justify-center items-center">
          <span className="bg-indigo-300 p-4 rounded-full w-16 text-center">AI</span>
        </div>
        <MatchesList className="w-4/5" list={firstPlayerList}/>
      </div>
      <p className="text-center text-zinc-500">Total amount: {firstPlayerList.length}</p>
      </div>
    );
}
  
export default FirstPlayer;