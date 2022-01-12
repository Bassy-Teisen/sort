import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function NewSong(props) {
    useEffect(() => console.log("useEffect: NewSong"), [])
    const params = useParams()
    console.log(params)

    return (
        <div>
            <h2>NewSong {params.song}</h2>            
        </div>
    )
}

