import "../styles/index.css";

import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "react-query";
import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";
import { ContextWrapper } from "components/ContextWrapper/ContextWrapper";
import { Provider } from "next-auth/client";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <ContextWrapper>
          <div>
            <Head>
              <title>Rur-Ally</title>
              <meta name="description" content="connecting rural communites and more" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="text-gray-900">
              <Navigation />
              <Component {...pageProps} />
            </main>
          </div>
        </ContextWrapper>
      </QueryClientProvider>
    </Provider>
  );
}
export default MyApp;
