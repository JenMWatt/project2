import { Link } from "react-router-dom";

function Home({ regions }) {
  return (
    <>
      <ul>
        {regions &&
          regions.map((region) => (
            <li key={region}>
              <Link to="/region" state={{ region: region }}>
                {region}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Home;
