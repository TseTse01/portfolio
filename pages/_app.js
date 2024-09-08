import "../styles/index.scss";
import Head from "next/head";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import user from "../reducers/user";

const store = configureStore({
  reducer: { user },
});
function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <link rel="icon" href="/logo.png" />
        <title>Davit Tsetsadze</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
