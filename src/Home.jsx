import { Link } from "react-router-dom";

function Home() {
    return (<>
        <header><h1>MMIW road map</h1> <div className="nav">
            <nav>
                <a href="/">Home</a> <a href="/Map">Map</a> <a href="/About">About</a>
            </nav>
        </div></header>
        <body>
            <p>hello</p>
        </body>
    </>
    );
}

export default Home;
