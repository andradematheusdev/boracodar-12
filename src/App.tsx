import { Navigation } from "./components"
import Logo from "./components/Logo"

function App() {
  return (
    <div className="wrapper">
      <div className="flex flex-col w-[175px] p-8 bg-purple-600">
        <div className="mb-16">
          <Logo />
        </div>
        <nav>
          <Navigation />
        </nav>
      </div>
      <div className="flex flex-1 bg-purple-600">
        <div className="flex w-full items-center justify-center bg-white rounded-tl-3xl">
          aaaa
        </div>
      </div>
    </div>
  )
}

export default App
