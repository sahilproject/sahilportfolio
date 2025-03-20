import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "2rmhu1z7",  
  dataset: "production",         
  useCdn: true,                  
  apiVersion: "2025-03-20",       
});

export default sanityClient;
