import { createClient, createPreviewSubscriptionHook } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { PortableText as PortableTextComponent } from "@portabletext/react";

const config = {
  projectId: "ogfmp4if",
  dataset: "production",
  token:
    "skU2updk7aaFQy8GasS4b5E9cTNPi8eVmu62o58QjbcqlsffCaUaTfMtuEY8zviiFfpuvxT1ZgfG0YX9n0vD3uNAO8JbtbngQIML46ixwJijBElhHYyZLYJyUIDvXvTBXg1O1pVx6V71RFlvvmQdrxY3XLq45E96KUUY4eHL4OUKD8NfvHUt",
  apiVersion: "2021-10-21",
  useCdn: false,
};

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const PortableText = (props) => (
  <PortableTextComponent components={{}} {...props} />
);
