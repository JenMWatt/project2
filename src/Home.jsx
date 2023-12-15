import { Link } from "react-router-dom";

function Home() {
    return (<>
        <header><h1>MMIW road map</h1></header>
        <body>

            <Link to="about">Click to view our about page</Link>
            <Link to="contact">Click to view our contact page</Link>



            <p>hello</p>
        </body></>
    );
}

export default Home;
