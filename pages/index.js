import Head from "next/head";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Baba | home</title>
        <meta
          name="description"
          content="Baaba providing learning materials for students in the form of pdf and images"
        />
        <meta
          name="keyword"
          content="Baaba learn learning materials slides passco pass questions images university student"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Ads />
        <div className="flex md:flex-row flex-col md:h-[92vh]">
          <div className="md:w-[60%] md:h-auto h-[40vh] md:m-0 m-8 flex flex-col justify-center">
            <div className="font-light space-y-4 text-xl md:w-3/5 md:m-auto">
              <h1 className="text-4xl font-bold">
                Helping student A&apos;s their grades
              </h1>
              <p>
                helping students in Ghana and beyond, by making learning
                materials easy to access.
              </p>
              <div className="font-semibold bg-[#ff1596] inline-block text-sm text-white py-2 px-4 rounded-full">
                <Link href="/materials">Get Started</Link>
              </div>
            </div>
          </div>
          <div
            className="md:w-[40%] md:h-full h-[450px]
          p-8"
          >
            <img
              src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="object-cover object-center w-full h-full rounded-xl"
            />
          </div>
        </div>
        <div id="container-5d84192ff9af6fbe751dc69ae3bb81fa"></div>
        <div className="space-y-4  md:pt-16 md:w-4/5 md:m-auto m-4 bg-white">
          <h2 className="font-bold md:text-2xl text-xl">Learning Materials</h2>
          <div>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
              <div className="md:flex-1 w-full md:w-auto">
                <img
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
                  className="h-[200px] md:h-[350px] md:w-3/4 w-full object-cover object-center md:m-4 rounded-xl"
                />
              </div>
              <div className="md:flex-1 w-full md:w-auto space-y-2">
                <h1 className="md:text-5xl text-3xl text-center md:text-left font-bold md:leading-snug">
                  Lecture Slides And Past Questions Available.
                </h1>
                <p className="font-light md:text-xl text-md text-center md:text-left ">
                  These materials are provided according to courses and year.
                </p>
                <div className="font-medium flex justify-end cursor-pointer">
                  <Link href="/materials">
                    <p className="flex space-x-2 text-rose-600 text-right">
                      <span>view more</span>
                      <HiOutlineArrowNarrowRight size={24} />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4  pt-16 md:w-4/5 md:m-auto m-4 flex flex-col pb-8">
          <h2 className="font-bold md:text-2xl self-end text-xl">
            Contribution
          </h2>
          <div>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
              <div className="md:flex-1 w-full md:w-auto space-y-2">
                <h1 className="md:text-5xl text-3xl text-center md:text-left font-bold md:leading-snug">
                  Contribute To Our Website By Sending Learning Materials
                </h1>
                <p className="font-light md:text-xl text-md text-center md:text-left">
                  Send learning materials to our website to help build a better
                  website.
                </p>
                <div className="font-medium cursor-pointer">
                  <Link href="/contribute">
                    <p className="flex space-x-2 text-rose-600 text-right">
                      <span>get started</span>
                      <HiOutlineArrowNarrowRight size={24} />
                    </p>
                  </Link>
                </div>
              </div>
              <div className="md:flex-1 w-full md:w-auto md:justify-end">
                <img
                  src="https://images.unsplash.com/photo-1472772224448-b24d00409675?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  className="h-[200px] md:h-[350px] md:w-3/4 w-full object-cover object-center md:m-4 rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
