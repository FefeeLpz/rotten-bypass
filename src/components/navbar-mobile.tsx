import { Menu } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import Link from "next/link"


const navbarMobile = () => {
  return (
    <Popover>
        <PopoverTrigger>
            <Menu color="#ffffff" />
        </PopoverTrigger>
        <PopoverContent>
            <Link href="#inicio" className="block">Inicio</Link>
            <Link href="#showcase" className="block">Showcase</Link>
            <Link href="#precios" className="block">Precios</Link>
            <Link href="#metodos" className="block">Metodos</Link>
            <Link href="#contacto" className="block">Contacto</Link>
        </PopoverContent>
    </Popover>
  )
}

export default navbarMobile