import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
    projectId: "af0sjo6h",
    dataset: "production",
    apiVersion: "2024-01-08",
    useCdn: true,
});

const imgbuilder = ImageUrlBuilder(sanityClient);

export function urlFor(source) {
    return imgbuilder.image(source);
}