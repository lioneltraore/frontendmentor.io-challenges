import Card from "./components/card/Card";

function App() {
  return (
    <div className="bg-darker flex flex-col items-center justify-center h-screen p-6 text-lighter">
      <Card />
      <div className="absolute bottom-3 inset-x-0">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Lionel Traore</a>.
      </div>
    </div>
  );
}

export default App;
