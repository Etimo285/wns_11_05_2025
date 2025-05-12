import { useQuery } from "@apollo/client"
import { GET_COUNTRY } from "../api/queries"
import { Country } from "../types"
import { useSearchParams } from "react-router-dom";


export const CountryDetails = () => {

    const [searchParams] = useSearchParams();
    const code = searchParams.get("code");
    
    const { loading, data, error } = useQuery(GET_COUNTRY, { variables: { code } })
    if (loading) return <span>loading...</span>
    if (error) return <span>{error.message}</span>

    const country: Country = data.country

    return (
        <div className="flex flex-col text-center my-10">
            <h1 className="text-4xl">{country.emoji}</h1>
            <span>Name : {country.name}</span>
            <span>Continent : {country.continent ? country.continent.name : ""}</span>
        </div>
    )
}
