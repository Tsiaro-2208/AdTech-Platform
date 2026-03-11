import axios from "axios"

export type Country = {
    name: string
    Iso2: string
    Iso3: string
}

const countryList = async () : Promise<Country[]> => {
    const response = await axios.get('https://countriesnow.space/api/v0.1/countries/iso')
    return response.data.data
}

export default countryList