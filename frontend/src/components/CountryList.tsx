import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_COUNTRIES } from "../api/queries";
import { Country } from "../types";

export const CountryList = () => {
  const { loading, data } = useQuery(GET_COUNTRIES);
  if (loading) return <span>loading...</span>
  
  return (
    <ul className="flex flex-row flex-wrap gap-4 justify-center my-10">
      {data.countries.map((country: Country) => (
        <CountryItem country={country} />
      ))}
    </ul>
  );

};

const CountryItem = ({ country }: { country: Country }) => {
  return (
    <li className="w-28">
      <Link
        to={`/details?code=${country.code}`}
        className="flex flex-col justify-center text-center border border-gray-400 rounded-md py-4"
      >
        <span className="text-lg">{country.name}</span>
        <span className="text-2xl">{country.emoji}</span>
      </Link>
    </li>
  );
};
