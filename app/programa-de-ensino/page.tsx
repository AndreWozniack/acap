import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProgramaDeEnsinoPage() {
  return (
    <main className="flex flex-col items-center py-8">
      <div className="w-full max-w-4xl px-4 md:px-8">
        <Card className="bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 shadow-md">
          <CardHeader className="border-b border-zinc-300 dark:border-zinc-700 bg-gradient-to-r from-acap-green-700 to-acap-green-900 clip-angular-sm">
            <CardTitle className="text-2xl font-bold text-white">Programa de Ensino ACAP</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300">
              <li>
                Serão aceitos alunos com qualquer nível de habilidade será aceito na Academia, desde aqueles que estão
                no seu primeiro dia, até aqueles que já têm experiência e alta habilidade na chula.
              </li>
              <li>
                <strong>Não há</strong> restrições de idade
              </li>
              <li>
                A chula é <strong>exclusivamente</strong> executada por homens nas <strong>competições</strong>, mas o
                espaço é <strong>aberto</strong> para todos que tiverem <strong>interesse</strong> em aprender (Somente
                homens podem participar de concursos de chula realizados pelo MTG)
              </li>
            </ul>

            <p className="text-zinc-700 dark:text-zinc-300 mt-6 mb-4">
              Para melhor atender o que cada aluno precisa, serão criadas divisões baseadas no conhecimento da chula,
              sendo essas:
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 p-4 rounded-md border-l-4 border-acap-green-600">
                <h3 className="text-lg font-bold mb-2 text-acap-green-800 dark:text-acap-green-500">1. Iniciante</h3>
                <p className="text-zinc-700 dark:text-zinc-300">Alunos que estão começando a aprender o básico.</p>
                <p className="text-zinc-700 dark:text-zinc-300 mt-2">
                  <strong>Critério:</strong> Estar familiarizado com os fundamentos da chula, saber o sapateio básico da
                  chula e o passo Jacuzinho.
                </p>
              </div>

              <div className="bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 p-4 rounded-md border-l-4 border-acap-blue-600">
                <h3 className="text-lg font-bold mb-2 text-acap-blue-800 dark:text-acap-blue-600">2. Aprendiz</h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Alunos que dominam os fundamentos e estão começando a aprender movimentos mais complexos.
                </p>
                <p className="text-zinc-700 dark:text-zinc-300 mt-2">
                  <strong>Critério:</strong> Saber pelo menos um passo de chula básico.
                </p>
              </div>

              <div className="bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 p-4 rounded-md border-l-4 border-acap-gold-600">
                <h3 className="text-lg font-bold mb-2 text-acap-gold-700 dark:text-acap-gold-500">3. Sapateador</h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Alunos com compreensão intermediária, aprimorando suas técnicas e começando a desenvolver seu próprio
                  estilo.
                </p>
                <p className="text-zinc-700 dark:text-zinc-300 mt-2">
                  <strong>Critério:</strong> Saber pelo menos três passos de chula, entender os momentos de entrar no
                  passo, compassos musicais da chula e que momento começar o passo.
                </p>
              </div>

              <div className="bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 p-4 rounded-md border-l-4 border-acap-blue-600">
                <h3 className="text-lg font-bold mb-2 text-acap-blue-800 dark:text-acap-blue-600">4. Competidor</h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Alunos avançados que participam de competições e executam passos complexos com habilidade.
                </p>
                <p className="text-zinc-700 dark:text-zinc-300 mt-2">
                  <strong>Critério:</strong> Saber pelo menos seis passos de chula, ter criado pelo menos três passos
                  próprios e demonstrar autonomia na execução e ter participado de pelo menos uma competição.
                </p>
              </div>

              <div className="bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 p-4 rounded-md border-l-4 border-acap-blue-700">
                <h3 className="text-lg font-bold mb-2 text-acap-blue-800 dark:text-acap-blue-600">5. Chuleador</h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Alunos com conhecimento para impor seu estilo de dança, criar passos, entender requisitos de avaliação
                  e se aprimorar de maneira autônoma.
                </p>
                <p className="text-zinc-700 dark:text-zinc-300 mt-2">
                  <strong>Critério:</strong> Ter mais da metade dos seus passos de criação própria, ter participado de
                  pelo menos dois rodeios e um festival estadual.
                </p>
              </div>

              <div className="bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 p-4 rounded-md border-l-4 border-acap-gold-700">
                <h3 className="text-lg font-bold mb-2 text-acap-gold-700 dark:text-acap-gold-500">6. Mestre Chula</h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  O nível mais alto, representando a maestria na chula, capazes de inovar, ensinar outros, estar sempre
                  buscando novas referências além de se tornar uma referência na chula.
                </p>
                <p className="text-zinc-700 dark:text-zinc-300 mt-2">
                  <strong>Critério:</strong> O critério para essa é mais subjetivo, onde esse é um título que só se
                  consegue com o tempo e com experiência.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-acap-blue-800 to-acap-blue-900 text-white p-4 rounded-md clip-angular">
              <h3 className="text-xl font-bold mb-2 text-acap-gold-300">Mentores</h3>
              <p className="text-zinc-200">
                <strong>Critério:</strong> Alunos que já têm a capacidade técnica e desejam ajudar os outros. Serão
                escolhidos pelos mentores mais experientes com base em sua habilidade, dedicação e disposição.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4 text-acap-green-800 dark:text-acap-green-500">
                Metodologia em Ação
              </h3>
              <div className="overflow-hidden rounded-md shadow-md mb-6 border-2 border-acap-green-600">
                <img
                  src="/placeholder.svg?height=400&width=800"
                  alt="Aula de Chula em andamento"
                  className="w-full h-auto"
                />
              </div>

              <h3 className="text-xl font-bold mb-4 text-acap-blue-800 dark:text-acap-blue-600">Depoimentos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 p-4 rounded-md border-l-4 border-acap-gold-500">
                  <p className="text-zinc-700 dark:text-zinc-300 italic">
                    "A Academia de Chula Adaga de Prata transformou minha visão sobre o sapateado gaúcho. Hoje me sinto
                    confiante para criar meus próprios passos."
                  </p>
                  <p className="text-acap-gold-700 dark:text-acap-gold-500 font-bold mt-2">- João Silva, Chuleador</p>
                </div>
                <div className="bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 p-4 rounded-md border-l-4 border-acap-gold-500">
                  <p className="text-zinc-700 dark:text-zinc-300 italic">
                    "Comecei sem nenhuma experiência e hoje já participo de competições. A metodologia da academia faz
                    toda a diferença."
                  </p>
                  <p className="text-acap-gold-700 dark:text-acap-gold-500 font-bold mt-2">
                    - Pedro Santos, Competidor
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

