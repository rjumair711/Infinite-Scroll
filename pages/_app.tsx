import "@/styles/globals.css";
import "leaflet/dist/leaflet.css";

import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}
