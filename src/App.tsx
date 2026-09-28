import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { BeforeAfter } from './components/before-after/BeforeAfter';
import { Benefits } from './components/benefits/Benefits';
import { UseCases } from './components/use-cases/UseCases';
import { ProductCTA } from './components/product-CTA/ProductCTA';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <BeforeAfter />

        <Benefits />

        <UseCases />

        <ProductCTA />

        <Footer />
      </main>
    </>
  );
}

export default App;
