import { SiWhatsapp } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import Head from "next/head";

const Contribute = () => {
  return (
    <div>
      <Head>
        <title>Baba | Contribute</title>
        <meta
          name="description"
          content="baba contribution page send all your contributions on this page"
        />
        <meta
          name="keyword"
          content="Baba contribution page learn learning materials slides passco pass questions images university student"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="flex md:flex-row flex-col md:h-[92vh]">
          <div className="md:w-[60%] md:h-auto min-h-[40vh] md:m-0 m-8 flex flex-col justify-center">
            <div className="font-light space-y-8 text-xl md:w-3/5 md:m-auto text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold">
                  Contribute To Our Website By Sending Learning Materials.
                </h1>
                <p className="mb-4">
                  Send learning materials to our website to help build a better
                  website.
                </p>
              </div>
              <div className="space-y-4 hidden md:block">
                <h3 className="text-xl font-bold text-left">
                  Send Learning Material
                </h3>
                <div>
                  <div className="text-sm">
                    <div className="space-y-2">
                      <h3 className="flex space-x-4">
                        <HiOutlineMail size={24} />
                        <span>babacontribute@gmail.com</span>
                      </h3>
                      <h3 className="flex space-x-4">
                        <SiWhatsapp size={24} />
                        <span>0241779131</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="md:w-[40%] md:h-full h-[450px]
          p-8"
          >
            <img
              src="https://images.unsplash.com/photo-1573164574397-dd250bc8a598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
              className="object-cover object-center w-full h-full rounded-xl"
            />
          </div>
          <div className="space-y-4 md:hidden p-8">
            <h3 className="text-xl font-bold text-left">
              Send Learning Material
            </h3>
            <div>
              <div className="">
                <div className="space-y-2 text-sm">
                  <h3 className="flex space-x-4">
                    <HiOutlineMail size={24} />
                    <span>babacontribute@gmail.com</span>
                  </h3>
                  <h3 className="flex space-x-4">
                    <SiWhatsapp size={24} />
                    <span>0241779131</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contribute;
