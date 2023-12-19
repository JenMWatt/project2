import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "./firebase";
import "./App.css";

export default function AddForm() {
  const emptyData = {
    name: null,
    origin: null,
    found: null,
    age: null,
    status: "missing",
  };
  const [data, setdata] = useState(emptyData);

  function handleInput(key, e) {
    const newData = { ...data };
    newData[key] = e.target.value;
    setdata(newData);
  }

  async function handleSubmit() {
    try {
      //console.log(data);
      const docRef = await addDoc(collection(firestore, "mmiw"), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <>
      <div className="addform">
        <label>
          Name:{" "}
          <input
            type="text"
            onChange={(e) => handleInput("name", e)}
            value={data.name | ''}
          />
        </label>
        <label>
          origin:{" "}
          <input
            type="text"
            value={data.origin | ''}
            onChange={(e) => handleInput("origin", e)}
          />
        </label>
        <label>
          found:{" "}
          <input
            type="text"
            value={data.found | ''}
            onChange={(e) => handleInput("found", e)}
          />
        </label>
        <label>
          age:{" "}
          <input
            type="text"
            value={data.age | ''}
            onChange={(e) => handleInput("age", e)}
          />
        </label>
        <label>
          status:{" "}
          <select
            name="status"
            value={data.status | ''}
            onChange={(e) => handleInput("status", e)}
          >
            <option value="missing">missing</option>
            <option value="murdered">murdered</option>
          </select>
        </label>
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}
