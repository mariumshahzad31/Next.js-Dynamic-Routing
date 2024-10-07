import { useRouter } from "next/router";
import countries from "../../data/countries";

export default function CountryPage() {
  const router = useRouter();
  const { countryKey } = router.query;

  const country = countries[countryKey as string];

  if (!country) {
    return <p>Country not found.</p>;
  }

  return (
    <div>
      <h1>{country.name}</h1>
      <p>Population: {country.population}</p>
      <p>Capital: {country.capital}</p>

      <style jsx>{`
        div {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        h1 {
          text-align: center;
          color: #4caf50;
        }

        p {
          font-size: 18px;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}
