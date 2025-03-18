import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div 
      className="h-full w-full bg-cover bg-center" 
      style={{ backgroundImage: "url('/fundo.svg')" }}>

      
      <header className="flex items-center w-full justify-between p-4">

        <h1 className="md:text-3xl text-2xl text-white">
          
          Cardapio

        </h1>

        <div className="flex items-center gap-3">

          <Link href={"/"} className="px-3 py-2 rounded-lg bg-white">
            Home
          </Link>
          
        </div>
      </header>

        <div className="flex flex-wrap items-center justify-center h-screen gap-2">

            <Image  alt="home" src={"/cardapio/home.jpeg"} width={600} height={600} />

            <Image alt="home1" src={"/cardapio/home1.jpeg"} width={600} height={600} />

            <Image alt="home2" src={"/cardapio/home2.jpeg"} width={600} height={600} />

            <Image alt="formulario1" src={"/cardapio/formulario1.jpeg"} width={600} height={600} />

            <Image alt="formulario2" src={"/cardapio/formulario2.jpeg"} width={600} height={600} />

            <Image alt="formulario3" src={"/cardapio/formulario3.jpeg"} width={600} height={600} />

            <Image alt="formulario4" src={"/cardapio/formulario4.jpeg"} width={600} height={600} />

            <Image alt="formulario5" src={"/cardapio/formulario5.jpeg"} width={600} height={600} />
            
        </div>
        
    </div>
  );
}
