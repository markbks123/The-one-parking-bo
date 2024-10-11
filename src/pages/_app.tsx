import "@/styles/globals.css";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import Layout from "../components/layout/layout";
import store from "../redux/store";

function App({ Component, pageProps }: AppProps) {
  console.log("from mum");
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default App;
