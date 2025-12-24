import { trpc } from "./client"
import EcommerceHomepage from "./EcommerceHomePage"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartPage from "./pages/CartPage"
import SingleProductPage from "./pages/SingleProductPage"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AllProductList from "./pages/AllProductList"
// import Form from "./pages/Form"
// import ResetPasswordRequest from "./pages/ResetPasswordRequest"
// import PasswordResetPage from "./pages/PasswordResetPage"



function App() {



  return (
    <>
      {/* <EcommerceHomepage /> */}

      <BrowserRouter>
        <div>
          <Header />
          <Routes>

            <Route path="/" Component={EcommerceHomepage} />
            {/* <Route path="/" Component={Form} />
          <Route path="/reset" Component={ResetPasswordRequest} />
          <Route path="/reset-password" Component={PasswordResetPage} /> */}
            <Route path="/productlist" Component={AllProductList} />
            <Route path="/checkout/cart" Component={CartPage} />
            {/* <Route path="/product/:id" Component={SingleProductPage} /> */}
            <Route path="/:category/:slug" Component={SingleProductPage} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
