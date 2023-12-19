import { useState } from "react";
import { doc, writeBatch, collection } from "firebase/firestore";
import { firestore } from "./firebase";
import "./App.css";

export default function UploadJson() {
  const [file, setFile] = useState();

  function handleFileChange(e) {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }

  function handleUpload() {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
      const data = JSON.parse(reader.result);
      const batch = writeBatch(firestore);
      data.map((payload) => {
        const docRef = doc(collection(firestore, "mmiw"));
        batch.set(docRef, payload);
      });
      batch
        .commit()
        .then(() => {
          alert("document uploaded");
        })
        .catch((e) => {
          console.log(e);
        });
    };
  }

  return (
    <>
      <div>
        <label htmlFor="file" className="sr-only">
          Choose a file
        </label>
        <input id="file" type="file" onChange={handleFileChange} />
      </div>
      {file && (
        <section>
          File details:
          <ul>
            <li>Name: {file.name}</li>
            <li>Type: {file.type}</li>
            <li>Size: {file.size} bytes</li>
          </ul>
        </section>
      )}

      {file && <button onClick={handleUpload}>Upload a file</button>}
    </>
  );
}
