import { Sparkles } from "lucide-react"
import { navBar } from "../../data"
import Link from "next/link"
import NavbarMobile from "./navbar-mobile"

const navbar = () => {
  return (
    <nav className="flex items-center justify-between p-2 backdrop-blur-sm rounded-full max-[650px]:justify-center">
        <div className="flex justify-center items-center">
            <h2 className="text-lg font-normal px-2 py-2 text-white">
                Rotten Bypass
            </h2>
            <Sparkles className="" size={20} color="#ffffff" />
        </div>
        <div className="hidden max-[670px]:block ml-16">
            <NavbarMobile />
        </div>
        <div className="flex items-center justify-center px-4 py-1 rounded-full max-[670px]:hidden">
            {navBar.map((item) => (
                <div key={item.id} className="cursor-pointer text-sm font-normal hover:text-purple-600 rounded-full transition duration-500 mr-4 text-white">
                    <Link href={item.link}>{item.title}</Link>
                </div>
            )) 
        }
        </div>
    </nav>
  )
}

export default navbar