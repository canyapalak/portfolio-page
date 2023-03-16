import Head from "next/head";
import {
  BsFillMoonStarsFill,
  BsGithub,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Can Yapalak Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-cocogoose">canyapalak</h1>
            <ul className="flex items-center gap-5">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md font-cocogooseprolight text-sm"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 font-cocogooseprolight">
            <h2 className="text-2xl py-2 text-cyan-600 font-medium">
              Can Yapalak
            </h2>
            <h3 className="text-xl py-2">Junior Web Developer</h3>
            <p className="text-base py-2">
              👋 I'm Can, a Web Dev student residing in Berlin, Germany.
              <br></br>🌱 I'm currently learning how to be a Full-Stack Web Dev
              at Code Academy Berlin and spending all my time and energy in this
              new field of expertise.
              <br></br>💞️ When I finish my training program, I aim to start
              working as a full-time web developer at a company and keep on
              progressing with experience.
            </p>
          </div>
          <div className="text-3xl flex justify-center gap-7 text-cyan-600">
            <BsGithub />
            <BsLinkedin />
            <BsInstagram />
          </div>
        </section>
      </main>
    </div>
  );
}
