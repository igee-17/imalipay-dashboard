import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ModalErp,
  ModalBank,
  ModalAccountMain,
  ModalMobile,
  ModalUpload,
  ModalAccount,
  ModalErpMain,
  ModalErpConnect,
} from "./components";

import {
  Customers,
  Defaults,
  Overview,
  Profile,
  SharedLayout,
  Fulfillments,
  Reconcilation,
  CustomerProfile,
  FulfillmentDetails,
  ErrorPage,
} from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Overview />} />
          <Route path="defaults" element={<Defaults />} />
          <Route path="customers" element={<Customers />} />
          <Route
            path="/customers/customer-profile"
            element={<CustomerProfile />}
          />
          <Route path="fulfilment" element={<Fulfillments />} />
          <Route
            path="/fulfilment/fulfilment-details"
            element={<FulfillmentDetails />}
          />
          <Route path="profile" element={<Profile />} />
          <Route path="reconcilation" element={<Reconcilation />}>
            {/* ----------- MODALS----------------- */}
            {/* CONNECT ACCOUNT */}
            <Route
              path="/reconcilation/connect-account"
              element={<ModalAccount />}
            >
              <Route index element={<ModalAccountMain />} />
              <Route
                path="/reconcilation/connect-account/mobile"
                element={<ModalMobile />}
              />
              <Route
                path="/reconcilation/connect-account/bank"
                element={<ModalBank />}
              />
            </Route>
            {/* CONNECT ERP */}
            <Route path="/reconcilation/connect-erp" element={<ModalErpMain />}>
              <Route index element={<ModalErp />} />
              <Route
                path="/reconcilation/connect-erp/connect"
                element={<ModalErpConnect />}
              />
            </Route>

            {/* UPLOAD */}
            <Route path="/reconcilation/upload" element={<ModalUpload />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
