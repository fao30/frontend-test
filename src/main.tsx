import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";

// styles
import "@/styles/index.css";
import "@/styles/stylesheet.css";
import "swiper/css/navigation";
import "swiper/css";

// react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();

// redux
import { Provider } from "react-redux";
import { store } from "@/global/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
