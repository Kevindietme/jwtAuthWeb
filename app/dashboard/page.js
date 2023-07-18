import CheckAuth from "./CheckAuth"
import Link from "next/link"
import Profile from "./Profile"
import PrivateStuff from "./PrivateStuff"

export default function Dashboard() {
  return( 
  
  <main className="p-8">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <CheckAuth />
          <h2 className="text-lg mb-4 font font-semibold text bg-purple-300">Private sorta stuff</h2>
          <PrivateStuff>
          <h2 className="text-lg mb-4 font font-semibold text bg-purple-300">Private sorta stuff</h2>
          </PrivateStuff>
          <Profile>

          </Profile>
          <Link href="/" className="text-indigo-400">Home</Link>
          
  </main>
  )
}