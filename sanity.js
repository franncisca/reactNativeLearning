import SanityClient  from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = SanityClient({
    projectId: "i2w8ga99",
    dataset: "production",
    useCdn: true,
    apiVersion:"2021-10-21",
});


const builder= ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
// Run this to add exception for local 3000 CORS policy
// sanity cors add http://localhost:3000
export default client;