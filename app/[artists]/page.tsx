"use client";
// import {useParams} from "next/navigation";
import getArtists from "@/app/lib/getArtists";
import {Button} from "@mui/material";
import {useState} from "react";
import {ArtProps} from "@/types";

export default function ArtistPreview() {
    const [name, setName] = useState("");
    const [artist, setArtist] = useState<ArtProps | null>(null);

    // make async function
    const getData = async () => {
        const artistData = await getArtists(name);
        console.log("artistData: ", artistData);
        if (artistData) {
            setArtist(artistData);
            setName("");
        }
    }

    return (
        <div className="min-h-screen bg-white p-4 flex items-center justify-center">
            <div className="w-full max-w-md space-y-4">
                <input
                    className="h-9 w-90 rounded-md border-stone-900 border-2 border border-input bg-white text-black"
                    name="artist"
                    type="text"
                    value={name}
                    placeholder="Enter an artist name..."
                    onChange={(e) => setName(e.target.value)}
                />
                <Button onClick={getData} type="submit">Search</Button>
            </div>
            {/*{artist ?*/}
            {/*    <ArtistDisplay inputArtists={artist}/> : null*/}
            {/*}*/}
            <div className="w-full max-w-md space-y-4 bg-stone-200 text-black inline-block m-2">
                <h4 className="font-bold text-3xl">{artist?.displayname}</h4>
                <h5>Lifespan: {artist?.displaydate ?? "Unknown"}</h5>
                <p>Birthplace: {artist?.birthplace ?? "Unknown"}</p>
                <p>Deathplace: {artist?.deathplace ?? "Unknown"}</p>
            </div>


            {/*<ArtistDisplay inputArtists={artist} />*/}
        </div>
    );
}