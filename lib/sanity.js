import { createClient, createPreviewSubscriptionHook } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { PortableText as PortableTextComponent } from "@portabletext/react";

const config = {
  projectId: "1mtvltxp",
  dataset: "production",
  token:
    "skR3nPhEPnOac6IVj1bKBrY32Ee0sNeEwYzZsif9P8Ta1FDQszJbWi5MsdXmxf3NxCAXSs4ZwULKmrrsWUbk5Z8KcpL0JWDvNUyJ7ve8U9OI3gyOFrbWdwXVgf4bA2nUHJH2ZZLT3j4puV1IFfQpaQr2H2OUJpF8TD4hZt4Vt9ZBweIL89v0",
  apiVersion: "2021-10-21",
  useCdn: false,
};

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const PortableText = (props) => (
  <PortableTextComponent components={{}} {...props} />
);
