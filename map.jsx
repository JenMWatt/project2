
import "./App.css";
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";


const Name = () => {
    const [name, setName] = useState("");
    const [names, setNames] = useState([]);

    const addName = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "names"), {
                name: name,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const fetchPost = async () => {

        await getDocs(collection(db, "names"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setNames(newData);
                console.log(names, newData);
            })

    }

    useEffect(() => {
        fetchPost();
    }, [])


    return (<>  <header><h1>MMIW road map</h1>
        <nav><a href="/">Home</a> <a href="/Map">Map</a> <a href="/About">About</a> </nav></header>
        <section className="name-container">
            <div className="name">
                <h1 className="header">
                    names
                </h1>

                <div>

                    <div>
                        <input
                            type="text"
                            placeholder="enter name?"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="btn-container">
                        <button
                            type="submit"
                            className="btn"
                            onClick={addName}
                        >
                            Submit
                        </button>
                    </div>

                </div>

                <div className="name-content">
                    {
                        names?.map((todo, i) => (
                            <p key={i}>
                                {name.name}
                            </p>
                        ))
                    }
                </div>
            </div>
        </section>
    </>
    )
}

export default Name