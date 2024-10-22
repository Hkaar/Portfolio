import { createClient } from "@sanity/client";

const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    apiVersion: process.env.SANITY_API_VERSION,
    dataset: process.env.SANITY_DATASET,
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
});

export default client;