import { AppRoutes } from "./routes/AppRoutes";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppRoutes />

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
};
