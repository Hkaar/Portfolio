import { createClient } from "@sanity/client";

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: process.env.NEXT_SANITY_API_VERSION,
    dataset: process.env.NEXT_SANITY_DATASET,
    token: process.env.NEXT_SANITY_API_TOKEN,
    useCdn: false,
});

export default client;