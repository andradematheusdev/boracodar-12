import { Header, Navigation } from "./components"
import Logo from "./components/Logo"

function App() {
  return (
    <div className="wrapper pt-1">
      <div className="flex flex-col w-[175px] p-8">
        <div className="mb-16">
          <Logo />
        </div>
        <nav>
          <Navigation />
        </nav>
      </div>
      <div className="flex flex-1">
        <div className="flex flex-col w-full py-12 bg-white rounded-tl-[32px]">
          <div className="flex w-full items-center px-8 py-3">
            <Header />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
