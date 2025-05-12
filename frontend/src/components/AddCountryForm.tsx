import { useMutation, useQuery } from "@apollo/client";
import { ADD_COUNTRY } from "../api/mutations";
import { useRef } from "react";
import { GET_CONTINENTS, GET_COUNTRIES } from "../api/queries";

export const AddCountryForm = () => {
  const [addCountry] = useMutation(ADD_COUNTRY, {
    refetchQueries: [GET_COUNTRIES],
  });

  const nameRef = useRef();
  const emojiRef = useRef();
  const codeRef = useRef();
  const continentRef = useRef();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      emoji: emojiRef.current.value,
      code: codeRef.current.value,
      continent: {
        id: parseInt(continentRef.current.value),
      },
    };
    console.log(formData);
    addCountry({ variables: { data: formData } });
  };

  const { loading, data } = useQuery(GET_CONTINENTS);
  if (loading) return <span>loading...</span>;

  const continents = data.continents;
  console.log(continents);

  return (
    <form className="w-full my-10" method="post" onSubmit={handleSubmit}>
      <div className="flex flex-col xl:flex-row p-4 gap-8 justify-between bg-gray-200 border rounded-md border-gray-400">
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            className="bg-white border border-gray-400 py-1.5"
            name="name"
            ref={nameRef}
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="emoji">Emoji</label>
          <input
            className="bg-white border border-gray-400 py-1.5"
            name="emoji"
            ref={emojiRef}
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="code">Code</label>
          <input
            className="bg-white border border-gray-400 py-1.5"
            name="code"
            ref={codeRef}
            type="text"
          />
        </div>
        <select ref={continentRef} name="continent">
          {continents.map((continent: { id: number; name: string }) => {
            return (
              <option key={continent.id} value={continent.id}>
                {continent.name}
              </option>
            );
          })}
        </select>
        <button
          className="bg-pink-600 text-white border rounded-md p-5 font-bold cursor-pointer"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
};
