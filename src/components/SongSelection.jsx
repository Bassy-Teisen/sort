import { useEffect } from "react"
import { Link } from "react-router-dom"


export default function SongSelection({selections}) {
    useEffect(() => console.log("useEffect: SongSelection"), [])



    return (
        <div>
            <h2>Select a Song</h2>            
            <ul>
                {selections.map((song, index) => (
                    <li key={index}>
                        <Link to={`/song/new/${song} `}>{song}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
