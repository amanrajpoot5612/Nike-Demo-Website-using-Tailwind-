import { CustomerReviews , Hero , Footer ,
   PopularProducts, SpecialOffer , Services , SuperQuality , Subscribe
 } from "./sections"
 import Nav from "./components/Nav"


function App() {

  return (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-1
      wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
        <PopularProducts/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding-x py-10">
        <Services/>
      </section>
      <section className="padding">
        <SpecialOffer/>
      </section>
      <section className="padding
      bg-pale-blue">
        <CustomerReviews/>
      </section>
      <section className="padding-x
      sm:py-32 py-16 w-full">
        <Subscribe/>
      </section>
      <section className="padding-x
      bg-black padding-t pb-8">
        <Footer/>
      </section>
    </main>
  )
}

export default App
