import imageProfile from "../../assets/profile.jpg";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub, FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";


export const Home = () => {
    return (
        <main >
            <section id="home" className="pt-28 sm:py-10 mb-3 w-full flex justify-center">

                <div className="flex flex-col md:flex-row items-center mx-auto mt-6 p-4 justify-center">
                    <img src={imageProfile} alt="Imagem de perfil" className="w-40 h-40 md:w-60 md:h-60 rounded-full mr-4" />
                    <div className="text-center md:text-left mt-4 md:mt-0">
                        <h1 className="text-white font-bold uppercase text-2xl md:text-4xl">Sandro Campesatto</h1>
                        <p className="text-white uppercase text-lg">Desenvolvedor Web</p>
                    </div>
                </div>

            </section>
            <section id="about" className="px-8 sm:px-5">
                <h2 className="text-[#00ff08] font-semibold text-center text-xl md:text-3xl uppercase">Sobre Mim</h2>

                <p className="text-white text-justify text-lg mt-4">Me chamo Sandro dos Santos Campesatto Junior, graduando em Analise e Desenvolvimento de Sistemas no Centro Universitario do Norte - Uninorte. Amo técnologia, estudo programção, pois sempre foi um sonho meu ser programador, jogar vídeo game é meu hobbie, estou sempre em busca de evolução, novos desafios e novas tecnologias.</p>
            </section>
            <section id="skills" className="mt-6">
                <h2 className="text-[#00ff08]  text-center text-xl md:text-3xl uppercase sm:mt-10">Habilidades</h2>

                <div>
                    <ul className="text-white grid grid-cols-2 grid-rows-2 gap-y-4 justify-items-center sm:flex sm:justify-center sm:items-center sm:gap-10 mt-6 ">
                        <li className="text-6xl text-[#FC490B]">
                            <FaHtml5 />
                        </li>
                        <li className="text-6xl text-[#264DE4]">
                            <FaCss3Alt />
                        </li>
                        <li className="text-6xl text-[#F7E018]">
                            <FaJsSquare />
                        </li>
                        <li className="text-6xl text-[#61DBFB]">
                            <FaReact />
                        </li>
                        <li className="text-6xl text-[#F05133]">
                            <FaGitAlt />
                        </li>
                        <li className="text-6xl">
                            <FaGithub />
                        </li>
                    </ul>
                </div>
            </section>
            <section id="contact" className="mt-6">
                <h2 className="text-[#00ff08]  text-center text-xl md:text-3xl uppercase sm:mt-10">Contato</h2>
                <p className="text-white text-center text-lg mt-4 px-6">Para entrar em contato comigo, ou me seguir nas res sociais.</p>

                <div className="flex justify-center gap-6 my-6">
                    <a href="https://wa.me/5592984028930" target="_blank" className="text-5xl text-[#00ff08] hover:scale-110 hover:shadow-lg hove:shadow-[#00ff08] transition-all ease-in-out duration-500">
                        <FaWhatsapp />
                    </a>
                    <a href="https://www.linkedin.com/in/campesattojr/" target="_blank" className="text-5xl text-[#00ff08] hover:scale-110 hover:shadow-lg hove:shadow-[#00ff08] transition-all ease-in-out duration-500">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/CampesattoJr" target="_blank" className="text-5xl text-[#00ff08] hover:scale-110 hover:shadow-lg hove:shadow-[#00ff08] transition-all ease-in-out duration-500">
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/campesattojr/" target="_blank" className="text-5xl text-[#00ff08] hover:scale-110 hover:shadow-lg hove:shadow-[#00ff08] transition-all ease-in-out duration-500">
                        <FaInstagram />
                    </a>
                </div>
            </section>
        </main>
    )
}