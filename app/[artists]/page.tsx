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
                <h4 className="font-bold text-3xl m-5">{artist?.displayname ?? "No name yet!"}</h4>
                <p className="m-5">Lifespan: {artist?.displaydate ?? "Unknown"}</p>
                <p className="m-5">Birthplace: {artist?.birthplace ?? "Unknown"}</p>
                <p className="m-5">Deathplace: {artist?.deathplace ?? "Unknown"}</p>
                <p className="m-5">Didn&apos;t get who you were looking for? Try being more specific!</p>

            </div>


            {/*<ArtistDisplay inputArtists={artist} />*/}
        </div>
    );
}