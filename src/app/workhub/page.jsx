import Link from "next/link";
import Image from "next/image";
import CarrosselWork from "./carrosselWork";

export default function Home() {
  return (
    <div
      className="h-full w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/fundo.svg')" }}
    >
      <header className="flex items-center w-full justify-between p-4">
        <h1 className="md:text-3xl text-2xl text-white">OdontoFlow</h1>
        <div className="flex items-center gap-3">
          <Link href="/" className="px-3 py-2 rounded-lg bg-white">
            Home
          </Link>
        </div>
      </header>

      <div className="flex items-center justify-center py-10">
        <CarrosselWork />
      </div>

      <section
        id="projetos"
        className=" md:px-0 px-2  h-full text-white flex flex-col items-center justify-center gap-3"
      >
        <h1 className=" text-4xl font-bold">Descrição</h1>

        <p className="md:w-[500px]  w-[300px]">
          Plataforma voltada para organização e colaboração em ambientes
          corporativos. O front-end foi construído com Next.js para garantir uma
          renderização rápida e escalável, enquanto o back-end utiliza Java com
          Spring Boot, oferecendo robustez, segurança e integração com bancos de
          dados relacionais.
        </p>
      </section>
      <section
        id="projetos"
        className=" md:px-0 px-2 py-10 h-full text-white flex flex-col items-center justify-center gap-3"
      >
        <h1 className=" text-4xl font-bold">Tecnolgias</h1>

        <p className="md:w-[500px]  w-[300px]">
          Next.js (front-end com JavaScript), Spring Boot (back-end com Java).
        </p>
      </section>

      <section
        id="projetos"
        className=" md:px-0 px-2 min-h-screen text-white flex flex-col items-center justify-center gap-3"
      >
        <h1 className=" text-4xl font-bold">Projetos</h1>

        <ul className="flex flex-wrap items-center gap-4 md:w-[500px]  w-[300px]">
          <li>
            <Link href={"/cardapio"} className="flex items-center gap-1">
              <Image
                alt="cardapio"
                src={"/cardapio/logo.jpeg"}
                width={50}
                height={50}
              />

              <div>
                <h1 className="text-white font-bold text-xl">Cardapio</h1>

                <p className="text-sm text-zinc-300">
                  Sistema de gerenciamento de pedidos.
                </p>
              </div>
            </Link>
          </li>

          <li>
            <Link href={"/odontoflow"} className="flex items-center gap-1">
              <Image
                alt="odontoflow"
                src={"/odontoflow/logo.png"}
                width={50}
                height={50}
              />

              <div>
                <h1 className="text-white font-bold text-xl">OdontoFlow</h1>

                <p className="text-sm text-zinc-300">
                  Sistema de gerenciamento de estoque para clinicas
                  odontologicas.
                </p>
              </div>
            </Link>
          </li>

          <li>
            <Link href={"/fakeoufato"} className="flex items-center gap-1">
              <Image
                alt="fakeoufato"
                src={"/fakeoufato/logo.jpeg"}
                width={50}
                height={50}
              />

              <div>
                <h1 className="text-white font-bold text-xl">Fake ou Fato</h1>

                <p className="text-sm text-zinc-300">
                  Classificação de noticias em fake ou fato.
                </p>
              </div>
            </Link>
          </li>

          <li>
            <Link href={"/iclinica"} className="flex items-center gap-1">
              <Image
                alt="iclinica"
                src={"/iclinica/logo.png"}
                width={50}
                height={50}
              />

              <div>
                <h1 className="text-white font-bold text-xl">Iclinica</h1>

                <p className="text-sm text-zinc-300">
                  Sistema de agendamento clinico.
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </section>

      <section
        id="contatos"
        className="md:px-0 px-2  text-white flex flex-col items-center justify-center gap-3"
      >
        <h1 className="text-4xl font-bold">contatos</h1>

        <ul className="flex flex-col items-center justify-center gap-2 pb-10">
          <li>
            <Link
              href="https://wa.me/+5588996704089"
              className="flex items-center gap-1"
            >
              <Image
                alt="WhatsApp"
                src={"/whatsapp.svg"}
                width={20}
                height={20}
              />
              WhatsApp: (88)99670-4089
            </Link>
          </li>

          <li>
            <Link
              href="https://www.linkedin.com/in/pedro-lucas-ara%C3%BAjo-pinho-pierre-73b74b208/"
              className="flex items-center gap-1"
            >
              <Image
                alt="Linkedin"
                src={"/linkedin.svg"}
                width={20}
                height={20}
              />
              Linkedin: Pedro Lucas Araujo Pinho Pierre
            </Link>
          </li>

          <li>
            <Link
              href="https://github.com/LucasPierreAraujo"
              className="flex items-center gap-1"
            >
              <Image alt="GitHub" src={"/github.svg"} width={20} height={20} />
              GitHub: LucasPierreAraujo
            </Link>
          </li>

          <li>
            <Link
              href="https://www.instagram.com/lucas_pierre?igsh=bDBqZGtyM3l2ODJo&utm_source=qr"
              className="flex items-center gap-1"
            >
              <Image
                alt="Instagram"
                src={"/instagram.svg"}
                width={20}
                height={20}
              />
              Instagram: lucas_pierre
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
