import Link from "next/link";
import client from "../../client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import Loading from "../../components/Loading";
import Empty from "../../components/Empty";

const Course = () => {
  const { ref = "" } = useRouter().query;
  const params = { ref };
  const [courses, setCourse] = useState([]);
  const [preCourses, setPrev] = useState([]);
  const [text, setText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const loadData = async () => {
    setError(false);
    try {
      setLoading(true);
      const res = await client.fetch(
        `*[_type == 'course' && references($ref)] | order(_createdAt)`,
        params
      );

      setCourse([...res]);
      setPrev([...res]);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const searchText = () => {
    if (text === "") {
      setCourse([...preCourses]);
      return;
    }
    const searchList = courses.filter((course) =>
      course.programme.includes(text.toLocaleLowerCase())
    );
    setCourse(searchList);
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  useEffect(async () => {
    await loadData();

    return () => {};
  }, [ref]);
  return isLoading ? (
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
      <div className="bg-[url('https://images.unsplash.com/photo-1553484771-4e29a68540f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=663&q=80')] bg-no-repeat bg-center bg-cover h-[50vh]">
        <div className="w-3/5 mx-auto flex flex-col justify-center items-center space-y-4 h-full">
          <h1 className="text-4xl font-semibold text-white text-center">
            You can request a learning material from here.
          </h1>
          <div className="font-semibold bg-[#ff1596] inline-block text-sm text-white py-2 px-4 rounded-full">
            <Link href="/request">Request Materials</Link>
          </div>
        </div>
      </div>
      <div>
        <div className="flex space-x-4 border-2 border-gray-700 w-3/5 mx-auto rounded-full my-8 justify-center items-center">
          <input
            type="text"
            name="search"
            id="search"
            value={text}
            onChange={onChange}
            placeholder="Search for programme, course"
            className="text-sm border-none outline-none focus:ring-0 w-full rounded-full"
          />
          <div className="px-4">
            <label onClick={searchText}>
              <HiOutlineSearch size={24} />
            </label>
          </div>
        </div>
      </div>
      <div className="mx-4 my-8">
        <h2 className="text-2xl font-bold text-center">Choose Your Course</h2>
        <div className="md:w-4/5 md:mx-auto my-4 grid mx-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
          {courses.length ? (
            courses.map((course, index) => (
              <Link
                href={
                  course.available
                    ? {
                        pathname: `/materials/note`,
                        query: { ref: course._id },
                      }
                    : ""
                }
                key={index}
              >
                <div className="drop-shadow-lg bg-white h-full rounded-lg flex flex-col cursor-pointer px-2">
                  {!course.available ? (
                    <p className="self-end text-sm font-bold px-1 rounded m-2 bg-fuchsia-400 text-white">
                      coming soon
                    </p>
                  ) : (
                    <p className="self-start text-sm font-bold px-1 rounded m-2 bg-green-400 text-white">
                      available now
                    </p>
                  )}
                  <div className="flex flex-col mb-4">
                    <h3 className="font-semibold p-2 text-center line-clamp-2">
                      {course.course}
                    </h3>
                    <h2 className="font-medium px-2">Year: {course.year}</h2>
                    <h2 className="font-medium px-2">
                      Semester: {course.semester}
                    </h2>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-3">
              <Empty />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Course;
