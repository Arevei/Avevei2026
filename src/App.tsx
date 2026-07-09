import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"
import AuthenticationLayout from "./_authentication/AuthenticationLayout"
import SignInForm from "./_authentication/authForms/SignInForm"
import SignUpForm from "./_authentication/authForms/SignUpForm"
import { Toaster } from "./components/ui/toaster"
import { AuthProvider } from "./contextApi/AuthContext"
import MeetForm from "./pages/MeetForm"
import RootLayout from "./pages/RootLayout"
import Home from "./pages/Home"
import Account from "./pages/Account"
import { PricingPageTwo } from "./pages/Prices"
import { WorkPage } from "./pages/Works"
import UpdatePassword from "./pages/UpdatePassword"
import DeleteAccount from "./pages/DeleteAccount"
import ContactUs from "./pages/ContactUs"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import RefundPolicy from "./pages/RefundPolicy"
import ShippingPolicy from "./pages/ShippingPolicy"
import Terms from "./pages/Terms"
import PhoneNumberForm from "./_authentication/authForms/PhoneNumber";
import PaymentDetails from "./pages/PaymentDetails";
import ForGoogleLogin from "./pages/ForGoogleLogin";
// import BlogPage from "./blog/page";
import Blog from "./pages/Blog";
import BlogPage from "./pages/BlogPage";
import Services from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import RouteMeta from "./components/shared/RouteMeta";
import BrandBootLoader from "./components/shared/BrandBootLoader";
import AboutPage from "./pages/AboutPage";
import WhatWeDoPage from "./pages/WhatWeDoPage";
import TeamPage from "./pages/TeamPage";
import FAQPage from "./pages/FAQPage";
import ProductsPage from "./pages/ProductsPage";
import NGOProductPage from "./pages/NGOProductPage";
import JoinCloudProductPage from "./pages/JoinCloudProductPage";
import ProductWebsiteFramePage from "./pages/ProductWebsiteFramePage";
const App = () => {
  const [bootLoading, setBootLoading] = useState(true)

  useEffect(() => {
    ReactGA.initialize("G-K2Y9F3NB6Z")

    let minDelayPassed = false
    let browserLoaded = document.readyState === "complete"

    const finishIfReady = () => {
      if (minDelayPassed && browserLoaded) {
        setBootLoading(false)
      }
    }

    const minDelayTimer = window.setTimeout(() => {
      minDelayPassed = true
      finishIfReady()
    }, 1200)

    const handleLoaded = () => {
      browserLoaded = true
      finishIfReady()
    }

    if (!browserLoaded) {
      window.addEventListener("load", handleLoaded, { once: true })
    } else {
      handleLoaded()
    }

    return () => {
      window.clearTimeout(minDelayTimer)
      window.removeEventListener("load", handleLoaded)
    }
  }, [])

  return (
    <BrowserRouter>
    <AuthProvider>
        <BrandBootLoader active={bootLoading} />
        <div className="grid-bg"></div>
        {/* <div className="gradient-overlay"></div> */}
    <RouteMeta />
    <main className="flex h-screen w-full overflow-hidden">
    <Toaster />
      <Routes>
      <Route element={<AuthenticationLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>
        <Route path="/google/auth/contact" element={<PhoneNumberForm/>}/>
        <Route element={<RootLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/prices" element={<PricingPageTwo/>}/>
        <Route path="/meet" element={<MeetForm/>}/>
        <Route path="/works" element={<WorkPage/>}/>
        <Route path="/user/account/:name" element={<Account/>}/>
        <Route path="/user/updatepassword/:name" element={<UpdatePassword/>}/>
        <Route path="/user/deleteaccount/:name" element={<DeleteAccount/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/what-we-do" element={<WhatWeDoPage/>}/>
        <Route path="/team" element={<TeamPage/>}/>
        <Route path="/faq" element={<FAQPage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/products/ngo-management" element={<NGOProductPage/>}/>
        <Route path="/products/joincloud" element={<JoinCloudProductPage/>}/>
        <Route path="/products/:slug/website" element={<ProductWebsiteFramePage/>}/>
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
        <Route path="/refundpolicy" element={<RefundPolicy/>}/>
        <Route path="/shippingpolicy" element={<ShippingPolicy/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/payment/details" element={<PaymentDetails/>}/>
        <Route path="/google/login/wait" element={<ForGoogleLogin/>}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/blog/:paramSlag" element={<BlogPage />}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/services/:slug" element={<ServiceDetailPage/>}/>
        </Route>
      
      </Routes>
     
      </main>
      </AuthProvider>
    </BrowserRouter>
    // Git Update Section - (Feb 16)
  )
}

export default App
