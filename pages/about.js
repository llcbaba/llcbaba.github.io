const About = () => {
  return (
    <div>
      <div className="h-[30vh] bg-[url('https://images.unsplash.com/photo-1551503766-ac63dfa6401c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-no-repeat bg-center bg-cover flex justify-center items-center">
        <h1 className="text-center text-3xl font-bold">ABOUT US</h1>
      </div>
      <div className="md:w-4/5 mx-4 md:mx-auto mt-8">
        <div className="md:flex md:items-center">
          <div className="my-8 space-y-4 md:w-1/2">
            <h2 className="Logo text-xl font-bold">BABa</h2>
            <p className="text-lg md:text-left text-center">
              We are website or platform that provide learning material to
              student all over Ghana and beyond. Providing the right materials
              to student, help them in the academics that is why we are
              dedicated in doing so.
            </p>
            <p className="text-sm">BABa was founded in Ghana in 2022</p>
          </div>
          <div className="md:w-1/2 md:mx-auto md:p-4">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              className="md:w-4/5 w-full h-[300px] object-cover object-center rounded-md md:mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="md:w-4/5 mx-4 md:mx-auto my-16">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2 md:mx-auto md:p-4">
            <h2 className="text-xl font-bold md:hidden mb-4">Our Mission</h2>
            <img
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="md:w-4/5 w-full h-[300px] object-cover object-center rounded-md "
            />
          </div>
          <div className="my-8 space-y-4 md:w-1/2">
            <h2 className="text-xl font-bold hidden md:block">Our Mission</h2>
            <p className="text-lg md:text-left text-center">
              We want make it easy for student all over the world, when
              accessing learning materials. our aim provide student with past
              question and other learning materials. In other for them to excel
              in their academics.
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-4/5 mx-4 md:mx-auto mt-8">
        <div className="md:flex md:items-center">
          <div className="my-8 space-y-4 md:w-1/2">
            <h2 className="text-xl font-bold">Resources</h2>
            <p className="text-lg md:text-left text-center">
              Most material found on this website or platform are the works of
              third parties. <br />
              Most Images found on this website or platform we taken from
              unsplash.com, almost all slices and pdf were works of lectures of
              the university available.
            </p>
            <p className="text-sm">
              We do not claim the right to any of the images and the learning
              materials on this site
            </p>
            <p className="text-sm">
              In case you think your material have been posted on this site and
              you want us to take it down please contact us or write a report to
              us.
            </p>
          </div>
          <div className="md:w-1/2 md:mx-auto md:p-4">
            <img
              src="https://images.unsplash.com/photo-1598618589821-f031d29a366f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="md:w-4/5 w-full h-[300px] object-cover object-center rounded-md md:mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="md:w-4/5 mx-4 md:mx-auto mt-8">
        <h2 className="text-xl font-bold">Contact Us</h2>
        <div className="space-y-4 mb-8">
          <h2 className="font-bold Logo text-2xl">BAba</h2>
          <div>
            <h4 className="font-bold">Email</h4>
            <p className="text-sm">baballcgroup@gmail.com</p>
          </div>
          <div>
            <h4 className="font-bold">Phone</h4>
            <p className="text-sm">0501398684</p>
          </div>
          <div>
            <h4 className="font-bold">Location</h4>
            <p className="text-sm">Ghana, Central Region, Cape Coast</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
