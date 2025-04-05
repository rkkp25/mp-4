"use server";
import { ArtProps } from "@/types";

export async function getArtistData(artistName: string): Promise<ArtProps | undefined> {
    try {
        const res = await fetch(`https://api.harvardartmuseums.org/person?apikey=${
            process.env.HARVARD_KEY
        }&q=${artistName}`);
        const data = await res.json();
        console.log("artist data: ", data);
        return data.records[0];
    }
    catch (error) {
        console.log("Unable to Load Data" + error);
    }
}