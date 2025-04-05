import { ArtProps } from "@/types";
import {getArtistData} from "./getArtistData";

export default async function getArtists(artistName: string): Promise<ArtProps | undefined> {
    return await getArtistData(artistName);
}