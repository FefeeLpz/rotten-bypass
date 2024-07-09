import Paypal from "./ui/paypal"
import Mercadopago from "./ui/mercadopago"

const metodos = () => {
  return (
    <section id="metodos" className="flex flex-col justify-center items-center mt-32">
        <h2 className="text-white text-4xl font-bold">
            Metodos de <span className="text-purple-400">Pago</span>
        </h2>
        <div className="flex mt-7">
            <Paypal />
            <Mercadopago />
        </div>
    </section>
  )
}

export default metodos