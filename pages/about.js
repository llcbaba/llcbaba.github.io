import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Baba | about us</title>
        <meta name="description" content="Read more about us on this page" />
        <meta
          name="keyword"
          content="Baba about page learn learning materials slides passco pass questions images university student"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="h-[30vh] bg-[url('https://images.unsplash.com/photo-1551503766-ac63dfa6401c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-no-repeat bg-center bg-cover flex justify-center items-center">
          <h1 className="text-center text-3xl font-bold">ABOUT US</h1>
        </div>
        <div id="container-5d84192ff9af6fbe751dc69ae3bb81fa"></div>
        <div className="md:w-4/5 mx-4 md:mx-auto mt-8">
          <div className="md:flex md:items-center">
            <div className="my-8 space-y-4 md:w-1/2">
              <h2 className="Logo text-xl font-bold">BABa</h2>
              <p className="text-lg md:text-left text-center">
                This website or platform provides learning materials for
                students all over Ghana and beyond. Providing the right
                materials for students helps them in their academic studies.
                That is why we are dedicated to doing so.
              </p>
              <p className="text-sm">BABa was founded in Ghana in 2022.</p>
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
                We want to make it easy for students all over the world to
                access learning materials. Our aim is to provide students with
                past questions and other learning materials. In other, for them
                to excel in their academics.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-4/5 mx-4 md:mx-auto mt-8">
          <div className="md:flex md:items-center">
            <div className="my-8 space-y-4 md:w-1/2">
              <h2 className="text-xl font-bold">Resources</h2>
              <p className="text-lg md:text-left text-center">
                Most materials found on this website or platform are the work of
                third parties. <br />
                Most images found on this website or platform were taken from
                unsplash.com. Almost all the slides and pdfs were works of
                lectures by the university available.
              </p>
              <p className="text-sm">
                We do not claim the right to any of the images and the learning
                materials on this site.
              </p>
              <p className="text-sm">
                In case you think your material has been posted on this site and
                you want us to take it down, please do contact us or write a
                report to us.
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
      </main>
    </div>
  );
};

export default About;
