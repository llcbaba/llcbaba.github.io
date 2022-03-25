import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "k63htzcm",
  dataset: "production",
  useCdn: true,
});
