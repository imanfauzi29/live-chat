import { GoogleAuthProvider } from "firebase/auth"
import { signInWithRedirect } from "firebase/auth"
import { auth } from "../../firebase"

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <button
        className="bg-blue-500 py-2.5 px-6 shadow-md text-white"
        onClick={googleSignIn}
      >
        Google
      </button>
    </div>
  )
}

export default Welcome
