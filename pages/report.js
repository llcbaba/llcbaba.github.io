import { SiWhatsapp } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

const Report = () => {
  return (
    <div>
      <div>
        <div className="flex md:flex-row flex-col md:h-[92vh]">
          <div className="md:w-[60%] md:h-auto min-h-[40vh] md:m-0 m-8 flex flex-col justify-center">
            <div className="font-light space-y-8 text-xl md:w-3/5 md:m-auto text-center">
              <div>
                <h1 className="text-4xl font-bold">
                  Report all your issues with us on here.
                </h1>
                <p>Sorry for disturbing you and thank for reporting.</p>
              </div>
              <div className="space-y-4 hidden md:block">
                <h2 className="text-xl font-bold text-left">Send report to</h2>
                <div className="space-y-2">
                  <h3 className="flex space-x-4">
                    <HiOutlineMail size={24} />
                    <span>Baballc@gmail.com</span>
                  </h3>
                  <h3 className="flex space-x-4">
                    <SiWhatsapp size={24} />
                    <span>0241779131</span>
                  </h3>
                </div>
              </div>
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
          <div className="space-y-4 md:hidden p-8 text-sm">
            <h2 className="text-xl font-bold text-left">Send report to</h2>
            <div className="space-y-2">
              <h3 className="flex space-x-4">
                <HiOutlineMail size={24} />
                <span>baballc00rep@gmail.com</span>
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
  );
};

export default Report;
