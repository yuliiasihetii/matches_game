import { useSelector } from "react-redux";
import FirstPlayer from "./components/FirstPlayer";
import Header from "./components/Header";
import MatchesField from "./components/MatchesField";
import SecondPlayer from "./components/SecondPlayer";
import ModeSelector from "./components/ModeSelector";

function Layout() {
  const selectMode = useSelector(state => state.matches.isModeSelected)
  return (
    <div className="max-w-5xl mx-auto">
      {selectMode && <ModeSelector/>}
      <Header/>
      <FirstPlayer/>
      <MatchesField/>
      <SecondPlayer/>
    </div>
  );
}

export default Layout;