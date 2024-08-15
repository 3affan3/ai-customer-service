import ButtonGradient from "./assets/svg/ButtonGradient";
import Chatbot from "./components/Chatbot";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>

      <main className="flex-grow flex flex-col justify-end pb-[3rem]">
        <Chatbot />
      </main>

      <ButtonGradient />
    </div>
  );
};

export default App;

