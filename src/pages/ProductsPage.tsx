import Footer from "@/components/Footer/Footer"
import ProductShowcase from "@/components/ComponentsForPages/ForHomePage/ProductShowcase"
import ReactGA from "react-ga4"

const ProductsPage = () => {
  ReactGA.send({ hitType: "pageview", page: "/products", title: "Products Page" })

  return (
    <div className="flex flex-1">
      <div className="home-container w-full overflow-x-hidden">
        <div className="home-posts relative space-y-10 pb-6 sm:space-y-14 lg:space-y-16">
          

          <ProductShowcase variant="page" />

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
