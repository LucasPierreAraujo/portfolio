  "use client";

  import Image from "next/image";
  import Link from "next/link";
  import { useState } from "react";

  export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
      <div
        className="h-full w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/fundo.svg')" }}
      >
        <header className="fixed top-0 z-50 bg-black bg-opacity-70 backdrop-blur flex items-center w-full justify-between p-4">
          <h1 className="md:text-3xl text-2xl text-white">Lucas Pierre</h1>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center gap-1 w-8 h-8"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-full bg-white rounded transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white rounded transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white rounded transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          <nav
            className={`flex-col md:flex-row md:flex md:items-center absolute md:static top-full left-0 w-full md:w-auto bg-black bg-opacity-90 md:bg-transparent transition-[max-height] gap-2 duration-300 overflow-hidden md:overflow-visible ${
              menuOpen ? "max-h-96" : "max-h-0"
            } md:max-h-full`}
          >
            <Link
              href="#home"
              className="block px-3 py-2 rounded-lg border border-white text-white md:inline-block"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#sobre"
              className="block px-3 py-2 rounded-lg border border-white text-white md:inline-block"
              onClick={() => setMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="#experiencias"
              className="block px-3 py-2 rounded-lg border border-white text-white md:inline-block"
              onClick={() => setMenuOpen(false)}
            >
              Experiências
            </Link>
            <Link
              href="#tecnologias"
              className="block px-3 py-2 rounded-lg border border-white text-white md:inline-block"
              onClick={() => setMenuOpen(false)}
            >
              Tecnologias
            </Link>
            <Link
              href="#certificados"
              className="block px-3 py-2 rounded-lg border border-white text-white md:inline-block"
              onClick={() => setMenuOpen(false)}
            >
              Certificados
            </Link>
            <Link
              href="#projetos"
              className="block px-3 py-2 rounded-lg border border-white text-white md:inline-block"
              onClick={() => setMenuOpen(false)}
            >
              Projetos
            </Link>
            <Link
              href="#contatos"
              className="block px-3 py-2 rounded-lg border border-white text-white md:inline-block"
              onClick={() => setMenuOpen(false)}
            >
              Contatos
            </Link>
          </nav>
        </header>

        <section
          id="home"
          className="md:px-0 px-2  min-h-screen flex flex-col items-center justify-center  text-white"
        >
          <Image
            alt="perfil"
            src="/eu.jpeg"
            width={230}
            height={230}
            priority
            className="rounded-full w-40 h-40 my-4"
          />

          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="md:text-4xl text-2xl py-4 font-bold">
              Pedro Lucas Araujo Pinho Pierre
            </h1>

            <h2 className="text-xl font-bold">Desenvolvedor Front-End</h2>
          </div>

          <p className="md:w-[500px]  w-[300px] text-center py-2 pb-10">
            Desenvolvedor web, com experiência em Next.js, JavaScript, machine
            learning e empreendedorismo.
          </p>

          <Link
            href={"#contatos"}
            className="px-3 py-2 rounded-3xl bg-black text-white border border-white"
          >
            Entre em contato
          </Link>
        </section>

        <div className="w-full h-full flex flex-col justify-center items-center gap-10">
          <section
            id="sobre"
            className="scroll-mt-24 md:px-0 px-2 h-full text-white flex flex-col items-center justify-center gap-5"
          >
            <h1 className="text-4xl font-bold">sobre</h1>

            <p className="md:w-[500px]  w-[300px]">
              Sou desenvolvedor front-end, com foco em JavaScript e Next.js, com
              experiência na criação de interfaces interativas e responsivas. Além
              disso, atuei nos setores de bares e restaurantes, alimentação
              saudável e moda fitness, unindo tecnologia e inovação para atender
              às necessidades dos clientes. Busco constantemente novos desafios
              para expandir meu conhecimento e contribuir para o sucesso dos
              projetos em que atuo.
            </p>
            <section
              id="experiencias"
              className="scroll-mt-24 md:px-0 px-2 h-full text-white flex flex-col items-center justify-center gap-5"
            >
              <h2 className="text-4xl font-bold flex items-center justify-center">
                Experiências
              </h2>

              <h3 className="text-2xl font-bold md:w-[500px]  w-[300px]">
                Desenvolvedor Front-End:
              </h3>

              <p className="md:w-[500px]  w-[300px]">
                Atualmente, trabalho com JavaScript e Next.js, desenvolvendo
                interfaces interativas e responsivas para aplicações web. Tenho
                experiência em criar soluções que atendem às necessidades dos
                usuários, com foco na usabilidade e performance.
              </p>

              <h3 className="text-2xl font-bold md:w-[500px]  w-[300px]">
                Machine Learning e Classificação de Dados:
              </h3>

              <p className="md:w-[500px]  w-[300px]">
                Tenho experiência em machine learning, aplicando algoritmos para a
                classificação de dados e análise preditiva. Utilizo ferramentas e
                técnicas para resolver problemas complexos, melhorando a precisão
                e eficiência na análise de grandes volumes de dados.
              </p>

              <h3 className="text-2xl font-bold md:w-[500px]  w-[300px]">
                Gestor:
              </h3>

              <p className="md:w-[500px]  w-[300px]">
                Gerencio e desenvolvo negócios no ramo de bares e restaurantes,
                alimentação saudável e moda fitness, sempre buscando integrar as
                necessidades dos clientes com soluções inovadoras e tecnológicas.
                Essa experiência me permite aprimorar minhas habilidades como
                gestor enquanto busco sempre melhorar os produtos e serviços
                oferecidos.
              </p>
            </section>
          </section>

          <section
            id="tecnologias"
            className="scroll-mt-24 md:px-0 px-2 h-full text-white flex flex-col items-center justify-center gap-5"
          >
            <h2 className="md:text-4xl text-2xl font-bold flex items-center justify-center gap-">
              Tecnologias Front-End:
            </h2>

            <ul className="flex items-center  gap-2 md:w-[500px]  w-[300px]">
              <li>
                <Image alt="next" src={"/next.jpeg"} width={200} height={200} />
              </li>

              <li>
                <Image
                  alt="javascript"
                  src={"/javascript.png"}
                  width={200}
                  height={200}
                />
              </li>

              <li>
                <Image
                  alt="typscript"
                  src={"/typescript.png"}
                  width={200}
                  height={200}
                />
              </li>

              <li>
                <Image alt="react" src={"/react.png"} width={200} height={200} />
              </li>

              <li>
                <Image alt="html" src={"/html.png"} width={200} height={200} />
              </li>

              <li>
                <Image alt="css" src={"/css-3.png"} width={200} height={200} />
              </li>
            </ul>
          </section>

          <section
            id="certificados"
            className="scroll-mt-24 md:px-0 px-2 h-full text-white flex flex-col items-center justify-center gap-5"
          >
            <h1 className=" text-4xl font-bold">Certificados</h1>

            <ul className="flex flex-col gap-4 md:w-[500px]  w-[300px]">
              <li>
                <Link href={"/cursos"} className="flex items-center gap-1">
                  <div>
                    <h1 className="text-white font-bold text-xl">Cursos</h1>
                  </div>
                </Link>
              </li>

              <li>
                <Link href={"/encontros"} className="flex items-center gap-1">
                  <div>
                    <h1 className="text-white font-bold text-xl">
                      Encontros Universitários
                    </h1>
                  </div>
                </Link>
              </li>

              <li>
                <Link href={"/palestras"} className="flex items-center gap-1">
                  <div>
                    <h1 className="text-white font-bold text-xl">Palestras</h1>
                  </div>
                </Link>
              </li>
            </ul>
          </section>

          <section
            id="projetos"
            className="scroll-mt-24 md:px-0 px-2 h-full text-white flex flex-col items-center justify-center gap-5"
          >
            <h1 className=" text-4xl font-bold">Projetos</h1>

            <ul className="flex flex-wrap items-center gap-4 md:w-[500px]  w-[300px]">
              <li>
                <Link href={"/workhub"} className="flex items-center gap-1">
                  <Image
                    alt="workhub"
                    src={"/workhub/logo.svg"}
                    width={50}
                    height={50}
                  />

                  <div>
                    <h1 className="text-white font-bold text-xl">Workhub</h1>

                    <p className="text-sm text-zinc-300">
                      O WorkHub é uma plataforma inovadora que conecta freelancers
                      a clientes em busca de serviços qualificados. (em
                      construção)
                    </p>
                  </div>
                </Link>
              </li>

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
            className="scroll-mt-24 md:px-0 px-2 h-full text-white flex flex-col items-center justify-center gap-5"
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
                  <Image
                    alt="GitHub"
                    src={"/github.svg"}
                    width={20}
                    height={20}
                  />
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
      </div>
    );
  }
