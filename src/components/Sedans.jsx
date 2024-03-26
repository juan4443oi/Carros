import iconSedans from "../assets/icon-sedans.svg"
export default function Sedans() {
  return (
    <section className="bg-orange p-12 max-lg:rounded-t-lg lg:rounded-l-lg">
        <img src={iconSedans} alt="icone carros sedans" className="mb-7"/>
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Sedans</h2>
        <p className="font-lexend mb-7 text-offwhite lg:mb-20">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
        <a className="font-lexend bg-offwhitebg px-10 py-3 w-fit rounded-3xl text-orange border-2 border-offwhitebg hover:bg-orange hover:text-offwhitebg" href="https://www.webmotors.com.br/sedans?idcmp=s08%3Ac13%3A3ea9720bc8b644d8a93f04b278d48332&gclsrc=aw.ds&gad_source=1&gclid=CjwKCAjwnv-vBhBdEiwABCYQA7No_ri1GEwaFE5--aZq3JWn3PhZwInsz9PqpAUAuqIlqtc08s0J9RoCyVIQAvD_BwE" target="_blank">Ver mais</a>
       
    </section>
  )
}
