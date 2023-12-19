import { useLocation } from "react-router-dom";

function Mmiw({ data }) {
  const location = useLocation();
  const id = location.state.id;
  let doc;
  if (data) {
    doc = data.filter((doc) => doc.id === id)[0];
  }

  if (doc) {
    return (
      <>
        <h2>{doc.name}</h2>
        {doc.age && <div>age: {doc.age}</div>}
        {doc.region && <div>region: {doc.region}</div>}
        {status.region && <div>status: {doc.status}</div>}
      </>
    );
  } else return <></>;
}

export default Mmiw;
