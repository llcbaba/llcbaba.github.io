import Link from "next/link";
import client from "../../client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Empty from "../../components/Empty";

const Note = () => {
  const { ref = "" } = useRouter().query;
  const params = { ref };
  const [notes, setNote] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const loadData = async () => {
    setError(false);
    try {
      setLoading(true);
      const res = await client.fetch(
        `*[_type == 'note' && references($ref)] | order(_createdAt) {
        filename,
        type,
        available,
        passco,
        'documentUrl': material.asset->url
      }`,
        params
      );

      console.log(res);
      setNote([...res]);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
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
        <h2 className="text-2xl font-bold text-center">Notes</h2>
        <div className="md:w-4/5 md:mx-auto my-4 grid mx-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
          {notes.length ? (
            notes.map((note, index) => (
              <Link href={`${note.documentUrl}?dl=`} key={index}>
                <div className="drop-shadow-lg bg-white h-full rounded-lg flex flex-col cursor-pointer px-2">
                  {!note.available ? (
                    <p className="self-end text-sm font-bold px-1 rounded m-2 bg-fuchsia-400 text-white">
                      coming soon
                    </p>
                  ) : (
                    <p className="self-start text-sm font-bold px-1 rounded m-2 bg-green-400 text-white">
                      available now
                    </p>
                  )}
                  <div className="flex flex-col">
                    <h3 className="font-semibold p-2 line-clamp-2">
                      {note.filename}
                    </h3>
                    <h2 className="font-medium px-2">type: {note.type}</h2>
                  </div>
                  {note.passco ? (
                    <p className="self-end text-sm font-bold px-1 rounded m-2 bg-orange-400 text-white">
                      passco
                    </p>
                  ) : (
                    <p className="self-end text-sm font-bold px-1 rounded m-2 bg-rose-400 text-white">
                      note
                    </p>
                  )}
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

export default Note;
