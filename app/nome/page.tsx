import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function NomePage() {
  return (
    <main className="flex flex-col items-center py-8">
      <div className="w-full max-w-4xl px-4 md:px-8">
        <Card className="bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 shadow-md">
          <CardHeader className="border-b border-zinc-300 dark:border-zinc-700 bg-gradient-to-r from-acap-gold-700 to-acap-gold-800 clip-angular-sm">
            <CardTitle className="text-2xl font-bold text-zinc-900">De onde vem o nome da academia</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Para a criação do nome da Academia foram usadas algumas simbologias e significados:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="overflow-hidden rounded-md shadow-md">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Adaga - Símbolo de bravura"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-gradient-to-r from-acap-blue-800 to-acap-blue-900 text-white">
                  <h4 className="text-lg font-bold text-acap-gold-300">Símbolo da Adaga</h4>
                  <p className="text-zinc-200 text-sm mt-1">
                    A adaga representa a precisão e a técnica necessárias para a chula.
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-md shadow-md">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Prata - Símbolo de excelência"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-gradient-to-r from-acap-blue-800 to-acap-blue-900 text-white">
                  <h4 className="text-lg font-bold text-acap-gold-300">Símbolo da Prata</h4>
                  <p className="text-zinc-200 text-sm mt-1">
                    A prata simboliza o brilho e a excelência que buscamos em cada apresentação.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-acap-blue-800 to-acap-blue-900 p-4 rounded-md text-white mt-6">
              <h3 className="text-xl font-bold mb-2 text-acap-gold-300">A Adaga</h3>
              <p className="text-zinc-100 leading-relaxed">
                Simbolizando a bravura, a coragem e a preparação para enfrentar desafios. Assim como uma adaga é
                empunhada com destreza e determinação, a Academia busca formar chuleadores que não apenas dominem a
                técnica da chula, mas que também possuam a resiliência e a determinação necessárias para superar
                obstáculos e se destacar.
              </p>
            </div>

            <div className="bg-gradient-to-r from-acap-blue-800 to-acap-blue-900 p-4 rounded-md text-white mt-6">
              <h3 className="text-xl font-bold mb-2 text-acap-gold-300">A Prata</h3>
              <p className="text-zinc-100 leading-relaxed">
                Sendo um metal precioso, representa a excelência e a qualidade, bem como a valorização e o brilho que
                esperamos trazer para a vida de cada um deles através da expressão da chula.
              </p>
            </div>

            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mt-6">
              O nome Academia de Chula Adaga de Prata se refere não um local físico ou uma entidade a ser representada,
              mas uma maneira diferente de forjar novos chuleadores, afiar as habilidades e moldar estilos únicos de se
              dançar.
            </p>

            <div className="bg-gradient-to-r from-acap-gold-700 to-acap-gold-800 p-6 rounded-md clip-angular my-8">
              <h3 className="text-xl font-bold mb-3 text-zinc-900">Filosofia da Academia</h3>
              <p className="text-zinc-800 leading-relaxed">
                Mais do que um nome, Adaga de Prata representa uma filosofia de ensino que valoriza tanto a tradição
                quanto a inovação. Buscamos formar chuleadores que respeitem as raízes da dança, mas que também tenham a
                coragem de trazer sua própria expressão artística.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

