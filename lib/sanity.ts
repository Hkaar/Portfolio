import { createClient } from "@sanity/client";

const sanityClient = createClient({
    projectId: process.env.SANITY_PROJECT_ID ? process.env.SANITY_PROJECT_ID : 'aefnjm75',
    apiVersion: process.env.SANITY_API_VERSION ? process.env.SANITY_API_VERSION : "v2022-03-07",
    dataset: process.env.SANITY_DATASET ? process.env.SANITY_DATASET : 'production',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
});

export default sanityClient;