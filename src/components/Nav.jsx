import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div>
            <>
                <Link to="/" >Home</Link>  |          
                <Link to="/selection" > Song selection</Link>  |          
                <Link to="/song/new" > New Song</Link>            

            </>
        </div>
    )
}
