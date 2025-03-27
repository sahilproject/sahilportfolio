import { client } from "@/sanity/lib/client";
import Home from "./Home";

export default async function Page() {
  const projects = await client.fetch(`*[_type == "project"]`);

  return <Home projects={projects} />;
}
