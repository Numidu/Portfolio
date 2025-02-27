import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { FaMoon } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Logoimage from "../src/assets/code.png";
import Logoimage2 from "../src/assets/design.png";
import myimage1 from "../src/assets/profile.png";
import { use } from "react";
import myphoto from "../src/assets/myphoto.jpg";
import Myproject from "./Myproject";
import Myproject2 from "./Myproject2";
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaFlutter } from "react-icons/fa6";

function App() {
  const [count, setCount] = useState(0);
  const [darkmode, setdarkmode] = useState(false);

  return (
    <>
      <div className={darkmode ? "dark" : ""}>
        <main className="bg-yellow-50 min-h-screen px-10 md:px-20 lg:px-40 dark:bg-black">
          <section>
            <nav className="py-10 flex justify-between">
              <h1 className=" text-sm md:text-sm dark:text-white">
                Develop with Numidu
              </h1>
              <ul className=" flex items-center">
                <li>
                  <FaMoon
                    className=" cursor-pointer text-xl mx-5  dark:text-white"
                    onClick={() => setdarkmode(!darkmode)}
                  />
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1QKuz5axLehqkpWUtfLPC2pbuSJcMGLLC/view?usp=drive_link"
                    className="bg-yellow-400 text-black rounded-md border-none p-2"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>

            {/* hero section */}
            <div className=" text-center p-10">
              <h1 className="text-5xl font-bold text-yellow-400 md:text-6xl lg:text-7xl lg:mb-4">
                Software Engineering
              </h1>
              <h3 className="text-2xl py-4  dark:text-white">
                Mobile app and web site development
              </h3>
              <p className="text-sm py-4  max-w-xl mx-auto    md:text-md  dark:text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatum id repudiandae asperiores impedit quae soluta
                veritatis tempora cupiditate iusto corrupti!
              </p>
            </div>

            <div className="text-5xl flex justify-center gap-16 text-gray-600">
              <a href="https://github.com/Numidu">
                <FaGit />
              </a>
              <a href="">
                <FaLinkedin />
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 md:gap-4 ">
              <div className="my-auto">
                <div className="bg-blue-500 p-2 m-1 rounded-full  flex flex-row justify-center w-64 mx-auto">
                  <div className="my-auto font-bold dark:text-white">HTML</div>
                  <div>
                    <FaHtml5 className="text-4xl " />
                  </div>
                </div>
                <div className="bg-blue-500 p-2 m-1 rounded-full  flex flex-row justify-center w-64 mx-auto">
                  <div className="my-auto font-bold dark:text-white">CSS</div>
                  <div className="pl-2">
                    <FaCss3Alt className="text-4xl " />
                  </div>
                </div>
                <div className="bg-blue-500 p-2 m-1 rounded-full  flex flex-row justify-center w-64 mx-auto">
                  <div className="my-auto font-bold dark:text-white">
                    JAVASCRIPT
                  </div>
                  <div>
                    <IoLogoJavascript className="text-4xl " />
                  </div>
                </div>
                <div className="bg-blue-500 p-2 m-1 rounded-full  flex flex-row justify-center w-64 mx-auto">
                  <div className="my-auto font-bold dark:text-white">
                    FLUTTER
                  </div>
                  <div>
                    <FaFlutter className="text-4xl " />
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <img
                  src={myphoto}
                  alt="image1"
                  className="rounded-full w-36 h-36 border-4 shadow-lg object-cover my-auto md:w-64 md:h-64"
                />
              </div>
              <div className="my-auto">
                <div className="bg-cyan-500 p-2 m-1 rounded-full  flex flex-row justify-center w-64 mx-auto">
                  <div className="my-auto font-bold">JAVA</div>
                  <div>
                    <FaJava className="text-4xl " />
                  </div>
                </div>
                <div className="bg-cyan-500 p-2 m-1 rounded-full  flex flex-row justify-center w-64 mx-auto">
                  <div className="my-auto font-bold">C</div>
                  <div className="pl-2">
                    <FaCss3Alt className="text-4xl " />
                  </div>
                </div>
                <div className="bg-cyan-500 p-2 m-1 rounded-full  flex flex-row justify-center w-64 mx-auto">
                  <div className="my-auto font-bold">PYTHON</div>
                  <div>
                    <FaPython className="text-4xl " />
                  </div>
                </div>
                <div className="bg-cyan-500 p-2 m-1 rounded-full  flex flex-row justify-center w-64 mx-auto">
                  <div className="my-auto font-bold">REACT</div>
                  <div>
                    <FaReact className="text-4xl " />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div>
              <h2 className="text-5xl py-6 font-bold opacity-60  dark:text-white">
                Service I offer
              </h2>
              <p className="text-sm py-4 text-gray-400  dark:text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatum id repudiandae asperiores impedit quae soluta
                veritatis tempora cupiditate iusto corrupti!
              </p>
            </div>
            <div className="md:flex lg:flex gap-10 mx-auto">
              <div className=" bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
                <img className=" inline" src={Logoimage} alt="" />
                <h2 className="text-2xl font-bold">Graphic Designing</h2>
                <p className="text-sm py-2 text-gray-800 leading-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
                  et nam consequatur, porro ab voluptatum iure reiciendis
                  ratione, necessitatibus inventore doloremque esse eaque. Est,
                  dignissimos?
                </p>
              </div>
              <div className=" bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
                <img className=" inline" src={Logoimage2} alt="" />
                <h2 className="text-2xl font-bold">Graphic Designing</h2>
                <p className="text-sm py-2 text-gray-800 leading-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
                  et nam consequatur, porro ab voluptatum iure reiciendis
                  ratione, necessitatibus inventore doloremque esse eaque. Est,
                  dignissimos?
                </p>
              </div>

              <div className=" bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
                <img className=" inline" src={Logoimage} alt="" />
                <h2 className="text-2xl font-bold">Graphic Designing</h2>
                <p className="text-sm py-2 text-gray-800 leading-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
                  et nam consequatur, porro ab voluptatum iure reiciendis
                  ratione, necessitatibus inventore doloremque esse eaque. Est,
                  dignissimos?
                </p>
              </div>
            </div>
          </section>

          <section>
            <div>
              <h2 className="text-5xl py-6 font-bold opacity-60  dark:text-white">
                Potfolio{" "}
              </h2>
              <p className=" dark:text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
                perspiciatis numquam alias consequuntur eum voluptatum, mollitia
                id ipsa autem molestiae. Cumque dicta aut quae enim sunt illum
                quod quia alias.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-3">
                <Myproject />
              </div>
              <div className="p-3">
                <Myproject2 />
              </div>
              <div className="p-3">
                <Myproject />
              </div>
            </div>
          </section>

          <footer className=" boder-t-2 border-black text-sm opacity-70 flex flex-col gap-5   justify-center py-10 lg:flex-row lg: items-center">
            <div>
              <h3 className="text-5xl py-6 font-bold opacity-60  dark:text-white">
                Contact for me more details
              </h3>
              <p className=" dark:text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit voluptatum est, doloribus temporibus ratione dolor. Iure
                ipsa pariatur, rerum accusamus deserunt incidunt natus dolore
                voluptatum? Sunt quae fugiat deserunt minima.
              </p>

              <div className="text-5xl flex justify-center gap-16 text-gray-600">
                <a href="https://github.com/Numidu">
                  <FaGit />
                </a>
                <a href="">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
