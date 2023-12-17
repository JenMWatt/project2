
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
                setTodos(newData);
                console.log(names, newData);
            })

    }

    useEffect(() => {
        fetchPost();
    }, [])


    return (<>  <header><h1>MMIW road map</h1> <nav><a href="/">Home</a> <a href="/Map">Map</a> <a href="/About">About</a>  <a href="/Contact">Contact</a></nav></header>
        <section className="todo-container">
            <div className="todo">
                <h1 className="header">
                    MMIW names

                </h1>

                <div>

                    <div>
                        <input
                            type="text"
                            placeholder="insert name?"
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

                <div className="todo-content">
                    {
                        names?.map((name, i) => (
                            <p key={i}>
                                {name.name}
                            </p>
                        ))
                    }
                </div>
            </div>
        </section></>
    )
}

export default Name