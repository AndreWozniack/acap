export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-zinc-900 via-acap-blue-950 to-zinc-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-zinc-700 pb-6 mb-6">
          <section className="idealizador text-zinc-300 text-sm">
            <p className="leading-relaxed">
              Projeto idealizado e elaborado por André Fabricio Wozniack, inspirado em métodos que utilizou para
              aprender chula e em pessoas que lutam para difundir essa arte, em especial o Samuel Affornalli, Leonardo
              Brizolla, Mario Arruda, Mateus Arruda e Julio Arruda, além de muitos outros nomes da cultura que servem
              como esteio e como norte para este projeto.
            </p>
          </section>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} <span className="text-acap-gold-400">Academia de Chula Adaga de Prata</span>.
            Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-4">
              <a href="#" className="text-zinc-400 hover:text-acap-gold-300 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-zinc-400 hover:text-acap-gold-300 transition-colors">
                Termos de Uso
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

