import Link from "next/link";
import countries from "../data/countries";

export default function HomePage() {
  return (
    <div>
      <h1>Countries</h1>
      <p>List of countries:</p>
      <ul>
        {Object.keys(countries).map((countryKey) => (
          <li key={countryKey}>
            <Link
              href={`/country/${countryKey}`}
              passHref
              style={{ textDecoration: "none" }}
            >
              <div className="country-item">{countries[countryKey].name}</div>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        div {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        h1 {
          text-align: center;
          color: #4caf50;
        }

        ul {
          list-style-type: none;
          padding: 0;
        }

        li {
          margin: 10px 0;
          border-radius: 5px;
          overflow: hidden;
        }

        .country-item {
          background: #ddfede;
          padding: 15px;
          border-radius: 5px;
          transition: background-color 0.3s, color 0.3s;
          text-decoration: none;
          color: #333;
          font-weight: bold;
          text-align: center;
        }

        .country-item:hover {
          background: #4caf50;
          color: white;
        }
      `}</style>
    </div>
  );
}
