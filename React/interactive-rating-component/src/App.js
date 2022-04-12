import { useState } from "react";
import Feedback from "./components/Feedback/Feedback";
import ScoringBoard from "./components/score/ScoringBoard";

function App() {
  const [scoring, setScoring] = useState(0);

  const scoringHandler = (userScore) => {
    console.log('user score', userScore);
  }
  
  return (
    <div className="flex flex-col items-center justify-center h-screen p-6 bg-darker text-lighter">
      {/* {!scoring && <ScoringBoard onSubmitScoring={scoringHandler} />} */}
      {/* {scoring && <Feedback />} */}
      <Feedback />
    </div>
  );
}

export default App;
