import "./App.css"
import { auth } from "./firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import Welcome from "./components/ui/Welcome"
import Chat from "./components/ui/Chat"
import Navbar from "./components/ui/Navbar"

function App() {
  const [user] = useAuthState(auth)

  return (
    <>
      <Navbar />
      <div>{!user ? <Welcome /> : <Chat />}</div>
    </>
  )
}

export default App
