export const Button = () => {
  return (
    <section className="button pb-8 px-3">
      <h1 className="text-center font-semibold pb-8 text-2xl md:text-3xl lg:text-4xl">Присоеденяйтесь!</h1>
      <div className="flex text-lg md:text-xl font-PublicSans mx-auto max-w-lg justify-between">
        <a target="_blank" href="https://docs.google.com/forms/d/1rTKsqyMBO2rAnY7D_20ZQas4v2OgPJN65KLyIxykVdk/edit" className="block button__tutor cursor-pointer text-slate-800 px-6 py-4 rounded-3xl mr-3 transition hover:bg-slate-600 hover:text-white">
          Стать преподователем
        </a>
        <a target="_blank" href="https://docs.google.com/forms/d/1CEa5Yjwe7HICCjUIm2PTPwuC4eS79y9yPP9b1DvmHXo/edit" className="bg-blue-500 block text-white cursor-pointer button__student ml-3 px-6 py-4 transition rounded-3xl hover:bg-slate-500">
          Записать ученика
        </a>
      </div>
    </section>
  )
}