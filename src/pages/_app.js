import store from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  const renderWithLayout = Component.getLayout || ((page) => page)
  return <Provider store={store}>{

    renderWithLayout(<Component {...pageProps} />)}
  </Provider>

}
