import { useDispatch } from "react-redux"
import { selectMode } from "../features/matchesSlice"

function ModeSelector() {
    const dispatch = useDispatch()

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto ">
            <div className="flex items-center justify-center min-h-screen p-16 backdrop-blur-sm">
            <div className="relative bg-white w-96 rounded-xl shadow-lg">
              <div className="p-4">
                <h2 className="text-xl font-bold mb-5 text-center">Please choose, who will go first</h2>
                <div className="flex items-center justify-center">
                    <button 
                        onClick={()=> dispatch(selectMode({isAiPlayFirst: false}))}
                        className="bg-zinc-300 hover:bg-zinc-400 py-4 pl-6 pr-2 w-20 border-r-zinc-400 border-r rounded-bl-xl rounded-tl-xl"
                        >YOU
                    </button>
                    <button 
                        onClick={()=> dispatch(selectMode({isAiPlayFirst: true}))}
                        className="bg-zinc-300 hover:bg-zinc-400 py-4 pr-6 pl-2 w-20 border-l-zinc-400 border-l rounded-br-xl rounded-tr-xl"
                        >AI
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ModeSelector