import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";

// components
import AppRoutes from "@/AppRoutes";
import Navbar from "@/components/Navbar/Navbar";
import { ClipLoader } from "react-spinners";
import { Toaster } from "react-hot-toast";

export default function App(): React.JSX.Element {

  return (
    <BrowserRouter>
      <HelmetProvider>
        <Navbar />
        <Suspense
          fallback={
            <main className="flex flex-col text-spacecadet items-center justify-center min-h-screen">
              <h2 className="font-grandesign drop-shadow">Hebronstar</h2>
              <h6 className="!font-grandesign">Strategy Consultants</h6>
              <ClipLoader
                color="#1A334F"
                size={60}
                className="mt-6 drop-shadow"
              />
            </main>
          }
        >
          <AppRoutes />
        </Suspense>
        <Toaster
          toastOptions={{
            className:
              "font-medium font-argentcf text-spacecadet p-bigger bg-antiflash",
            duration: 2000,
          }}
        />
      </HelmetProvider>
    </BrowserRouter>
  );
}
