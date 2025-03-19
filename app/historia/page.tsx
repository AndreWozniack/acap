import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HistoriaPage() {
  return (
    <main className="flex flex-col items-center py-8">
      <div className="w-full max-w-4xl px-4 md:px-8">
        <Card className="bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 shadow-md">
          <CardHeader className="border-b border-zinc-300 dark:border-zinc-700 bg-gradient-to-r from-acap-blue-800 to-zinc-900 clip-angular-sm">
            <CardTitle className="text-2xl font-bold text-white">História da Chula</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Em 1951, Paixão Côrtes resgatou a história da chula através do relato do gaiteiro Agostinho Manuel
              Serafim, que descreveu como era a dança da chula, sendo essa executada somente por homens que se
              desafiavam ao ritmo de uma música.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="overflow-hidden rounded-md shadow-md border-2 border-acap-gold-600">
                <img src="/os_muripas.jpg?height=300&width=500" alt="Grupo Os Muuripás" className="w-full h-auto" />
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 px-2 pb-2">
                  Grupo Os Muuripás durante apresentação em 1971.
                </p>
              </div>
            </div>

            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              A chula ganhou popularidade em 1952, quando o grupo de baile do 35 CTG apresentou a chula no Theatro São
              Pedro em Porto Alegre. A partir daí, a chula começou a ser executada em festivais e em apresentações. Vale
              destacar o grupo Os Muuripás, que com suas apresentações a partir do ano de 1971 contribuíram muito para a
              popularidade da chula, além de outras danças do sul do Brasil e até mesmo de países vizinhos como a
              Argentina, sendo dançado o Malambo, também uma dança de sapateio em desafio.
            </p>

            <div className="bg-gradient-to-r from-acap-green-800 to-acap-green-900 p-4 rounded-md text-white mt-6">
              <h3 className="text-xl font-bold mb-2 text-acap-gold-300">Primeiro Concurso de Chula</h3>
              <p className="text-zinc-100 leading-relaxed">
                Existe uma certa imprecisão no que tange ao primeiro concurso de chula realizado, mas segundo o
                pesquisador Diego Muller, em 1977 ocorreu o primeiro Festival de danças gaúchas, o 1º FEMOBRAL, onde se
                tem relato do troféu de 2º lugar na modalidade da chula pelo chuleador Xarope, na ocasião representando
                o CTG Brazão do Rio.
              </p>
            </div>

            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mt-4">
              Após isso, todos esses anos se passaram e é fato que a chula evoluiu e se modificou, incorporou expressões
              de outras culturas, movimentos de danças como do frevo, do malambo, do sapateado americano entre outras,
              formando a chula como conhecemos hoje.
            </p>

            <div className="bg-gradient-to-r from-acap-blue-800 to-acap-blue-900 p-6 rounded-md text-white my-8">
              <h3 className="text-xl font-bold mb-3 text-acap-gold-300">Evolução da Chula</h3>
              <p className="text-zinc-100 leading-relaxed">
                Ao longo das décadas, a chula passou por diversas transformações, incorporando elementos de outras
                danças e se adaptando às novas gerações. Essa evolução permitiu que a tradição se mantivesse viva e
                relevante no cenário cultural gaúcho.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

