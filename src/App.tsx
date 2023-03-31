import { Grid, Header, Navigation, Search } from "./components";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="wrapper md:pt-1">
      <div className="hidden sm:flex flex-col w-[64px] min-w-[64px] lg:w-[175px] lg:p-8">
        <div className="flex w-full justify-center lg:justify-start mt-8 mb-16 lg:mt-0">
          <Logo />
        </div>
        <nav>
          <Navigation />
        </nav>
      </div>
      <div className="flex flex-1 min-w-[300px]">
        <div className="flex flex-col w-full py-12 bg-slate-50 md:rounded-tl-[32px] md:px-8 overflow-y-auto">
          <Header />
          <Search />
          <Grid />
        </div>
      </div>
    </div>
  );
}

export default App;
