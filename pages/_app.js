import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "@/styles/globals.css";

const theme = extendTheme({}); // Start with an empty theme and build up from there

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}