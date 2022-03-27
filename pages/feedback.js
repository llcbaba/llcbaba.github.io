import { SiWhatsapp } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import Head from "next/head";

const Report = () => {
  return (
    <div>
      <Head>
        <title>Baba | Feedback</title>
        <meta name="description" content="Send us feedback on this page" />
        <meta
          name="keyword"
          content="Baba feedback feedbacks page learn learning materials slides passco pass questions images university student"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="flex md:flex-row flex-col md:h-[92vh]">
          <div className="md:w-[60%] md:h-auto min-h-[40vh] md:m-0 m-8 flex flex-col justify-center">
            <div className="font-light space-y-4 text-xl md:w-3/5 md:m-auto text-center">
              <h1 className="text-4xl font-bold">
                Please send us what you think about our service, what we are
                doing wrong and what we are doing right.
              </h1>
              <p>
                Sending us feedbacks help us to make the site better. Thank you.
              </p>
            </div>
          </div>
          <div
            className="md:w-[40%] md:h-full h-[450px]
          p-8"
          >
            <img
              src="https://images.unsplash.com/photo-1544655152-4dc3bc4df059?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              className="object-cover object-center w-full h-full rounded-xl"
            />
          </div>
        </div>
        <div className="bg-gray-50 py-4">
          <div className="md:w-4/5 mx-4 md:mx-auto my-12">
            <h2 className="text-2xl font-bold text-center">Send Feedbacks</h2>
            <div className="md:flex my-8 md:space-y-0 space-y-8">
              <div className="space-y-8 flex-1 md:border-r-2 md:border-b-0 border-b-2 pb-16 md:pb-0">
                <h2 className="text-xl font-bold">Send feedbacks to</h2>
                <div className="space-y-4">
                  <h3 className="flex space-x-4">
                    <HiOutlineMail size={24} />
                    <span>baballc00fee@gmail.com</span>
                  </h3>
                  <h3 className="flex space-x-4">
                    <SiWhatsapp size={24} />
                    <span>0241779131</span>
                  </h3>
                </div>
              </div>
              <form className="flex-1 space-y-4 md:ml-16">
                <div className="flex flex-col">
                  <label htmlFor="fullname" className="text-sm">
                    Fullname
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    className="text-sm rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-sm">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="text-sm rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="text-sm rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="feedback" className="text-sm">
                    Feedback
                  </label>
                  <textarea
                    name="feedback"
                    id="feedback"
                    cols="30"
                    rows="5"
                    className="text-sm rounded-md"
                  ></textarea>
                </div>
                <div>
                  <input
                    type="submit"
                    value="Send Feedback"
                    className="py-2 px-4 bg-sky-500 text-white text-sm font-bold rounded-md"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
