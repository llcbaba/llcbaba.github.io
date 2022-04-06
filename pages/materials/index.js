import Link from "next/link";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Heads from "../../components/Heads";
import Ads from "../../components/Ads";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Materials = () => {
  const [schools, setSchool] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const loadData = async () => {
    setError(false);
    try {
      setLoading(true);
      const res = await client.fetch(
        `*[_type == 'school'] | order(_createdAt)`
      );

      setSchool([...res]);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(async () => {
    await loadData();

    return () => {};
  }, []);
  return (
    <div>
      <Heads
        page={"uni"}
        desc="Baaba providing learning materials for students in the form of pdf and images"
        keyword="Baaba learn learning materials slides passco pass questions images university student"
      />
      <main>
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <div className="h-[91vh] flex flex-col justify-center items-center space-y-2 text-gray-600">
            <h1 className="text-xl font-semibold">Error Loading Page</h1>
            <p className="text-sm font-extralight">
              try Again | Contact the platform provider
            </p>
            <p
              className="font-medium text-sm underline decoration-blue-600 cursor-pointer text-blue-600"
              onClick={loadData}
            >
              try again
            </p>
          </div>
        ) : (
          <div>
            <Ads />
            <div className="bg-[url('https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80')] bg-no-repeat bg-center bg-cover h-[50vh]">
              <div className="w-3/5 mx-auto flex flex-col justify-center items-center space-y-4 h-full">
                <h1 className="text-4xl font-semibold text-white text-center">
                  You can request a learning material from here.
                </h1>
                <div className="font-semibold bg-[#ff1596] inline-block text-sm text-white py-2 px-4 rounded-full">
                  <Link href="/request">Request Materials</Link>
                </div>
              </div>
            </div>
            <div className="mx-4 my-8">
              <div id="container-5d84192ff9af6fbe751dc69ae3bb81fa"></div>
              <h2 className="text-2xl font-bold text-center">
                Choose Your School
              </h2>
              <div className="md:w-4/5 md:mx-auto my-4 grid mx-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-[250px] gap-y-8 gap-x-4">
                {schools.length
                  ? schools.map((school, index) => (
                      <a
                        href={
                          school.available
                            ? {
                                pathname: `/materials/college`,
                                query: { ref: school._id },
                              }
                            : ""
                        }
                        key={index}
                      >
                        <div className="drop-shadow-lg bg-white h-full rounded-lg flex flex-col cursor-pointer">
                          {!school.available ? (
                            <p className="self-end text-sm font-bold px-1 rounded m-2 bg-fuchsia-400 text-white">
                              coming soon
                            </p>
                          ) : (
                            <p className="self-start text-sm font-bold px-1 rounded m-2 bg-green-400 text-white">
                              available now
                            </p>
                          )}
                          <h3 className="font-semibold p-2 text-center line-clamp-2">
                            {school.name}
                          </h3>
                          <img
                            src={urlFor(school.image).url()}
                            alt={school.name}
                            className="object-cover h-4 flex-1 object-center w-full rounded-lg"
                          />
                        </div>
                      </a>
                    ))
                  : ""}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Materials;
