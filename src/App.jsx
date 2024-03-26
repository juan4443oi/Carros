import Luxuosos from "./components/Luxuosos"
import Sedans from "./components/Sedans"
import SUVs from "./components/Suvs"

export default function App() {
  return (
    <main className="min-h-svh bg-offwhitebg py-20 px-6 antialiased lg:flex justif-center items-center">
      <section className="lg:flex max-w-{920px}">
        <Sedans />
        <SUVs />
        <Luxuosos />
      </section>
    </main>
    )
}