import CardSection from "./components/CardSection/CardSection";

function App() {
  return (
    <div className="flex items-center justify-center px-6 py-20 overflow-y-scroll bg-white lg:h-screen">
      <h1 className="hidden">3 Column Preview Card</h1>
      <CardSection />
    </div>
  );
}

export default App;
