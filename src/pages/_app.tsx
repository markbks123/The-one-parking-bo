import "@/styles/globals.css";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import Layout from "../components/layout/layout";
import store from "../redux/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <ToastContainer />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default App;
