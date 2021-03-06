import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Feedback from "./components/Feedback/Feedback";
import ScoringBoard from "./components/score/ScoringBoard";

function App() {
  const [scoring, setScoring] = useState(0);
  const [update, setUpdate] = useState(false);

  const scoringHandler = (userScore) => {
    if (userScore > 0) {
      setScoring(userScore);
      setUpdate(true);
    }
  };

  const closeHandler = () => {
    console.log("modal close");
    setScoring(0);
    setUpdate(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-6 bg-darker text-lighter">
      {!update && <ScoringBoard onSubmitScoring={scoringHandler} />}
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {update && <Feedback close={closeHandler} score={scoring} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
