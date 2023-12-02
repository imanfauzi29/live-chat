import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../firebase"

const Navbar = () => {
  const [user] = useAuthState(auth)

  const googleSignOut = () => {
    auth.signOut()
  }

  return (
    <>
      <nav className="w-full shadow-sm">
        <div className="py-4 px-6 flex justify-between">
          <h1>Chat Web</h1>
          <div>
            {user && (
              <button className="" onClick={googleSignOut}>
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
