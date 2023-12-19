import { Link, useLocation } from "react-router-dom";

function Region({ data }) {
  const location = useLocation();
  const region = location.state.region;

  return (
    <>
      <h2>{region}</h2>
      <ul>
        {data &&
          data
            .filter((doc) => doc.region === region)
            .map((doc) => (
              <li key={doc.id}>
                <Link to="/mmiw" state={{ id: doc.id }}>
                  {doc.name}
                </Link>
              </li>
            ))}
      </ul>
    </>
  );
}

export default Region;
