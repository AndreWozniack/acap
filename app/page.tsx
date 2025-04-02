"use client";
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  color: string;
}

export default function Home() {

  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Erro ao buscar eventos:", err));
  }, []);

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-zinc-900 via-acap-blue-900 to-zinc-800 py-20 px-4 md:px-8 text-center md:text-left clip-angular">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Texto à esquerda */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-acap-gold-500 tracking-tight text-shadow">
            <span className=" text-acap-gray-200">Academia de Chula</span>
            </h3>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight text-shadow">
              <span className="font-bold text-acap-gray-300">Adaga de Prata</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300">
              Descubra a arte do sapateado gaúcho!
            </p>
            <Button className="mt-4 bg-acap-gold-600 hover:bg-acap-gold-700 text-white border-none">
              <Link href="/programa-de-ensino" className="flex items-center">
                Conheça nosso programa <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Imagem à direita */}
          <div className="w-full">
            <img
              src="/logo_adaga.png?height=400&width=800"
              alt="Academia de Chula Adaga de Prata"
              className="w-full max-w-[400px] md:max-w-[350px] mx-auto md:mx-0 h-auto rounded-md shadow-lg"
            />
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="w-full max-w-6xl py-12 px-4 md:px-8">
        <div className="bg-zinc-100 dark:bg-zinc-800 p-6 md:p-8 rounded-md shadow-md transform -mt-10 border-l-4 border-acap-green-600">
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            O projeto da Academia de Chula Adaga de Prata surge da aspiração de disseminar a arte do sapateado gaúcho e
            da chula, com um propósito de ser um centro inclusivo de aprendizagem, onde entusiastas de todas as idades e
            habilidades são bem-vindos para explorar e aprimorar suas competências na dança. A Academia se propõe a ser
            um ambiente colaborativo e criativo, facilitando um espaço onde pode se desenvolver e refinar seu estilo
            pessoal de dança.
          </p>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mt-4">
            Esse projeto visa estabelecer uma comunidade coesa de chuleadores que compartilham conhecimentos, oferecem
            suporte mútuo e enriquecem suas práticas artísticas através das experiências individuais. Os participantes
            serão conduzidos desde os fundamentos básicos da dança até alcançarem autonomia para a construção de suas
            apresentações, passos, coreografias e até mesmo como um mentor de chula.
          </p>
        </div>
      </section>


      {/* Info Section */}
      <section className="w-full max-w-6xl py-8 px-4 md:px-8">
        <div className="bg-gradient-to-r from-zinc-700 to-zinc-800 text-white p-6 md:p-8 rounded-md shadow-md clip-angular">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-acap-gold-300">Onde?</h3>
              <p className="text-zinc-200">
                As aulas serão realizadas no Centro Multieventos de Fazenda Rio Grande, Av. Brasil - Eucaliptos, Fazenda Rio Grande - PR
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-acap-gold-300">Quando?</h3>
              <p className="text-zinc-200">As aulas ocorrerão semanalmente, das 20h às 22h ás quintas-feiras</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-acap-gold-300">Qual o valor?</h3>
              <p className="text-zinc-200">As aulas serão gratuitas, sendo necessário inscrição prévia!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="w-full max-w-6xl py-12 px-4 md:px-8">
        <Card className="bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 shadow-md">
          <CardHeader className="border-b border-zinc-300 dark:border-zinc-700 bg-gradient-to-r from-acap-blue-800 to-zinc-900">
            <CardTitle className="text-2xl font-bold text-white">Programa de Ensino</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              O programa de ensino da Academia de Chula Adaga de Prata é projetado para proporcionar a todos os alunos,
              independentemente de seu nível, uma compreensão profunda e habilidades práticas na arte da chula. Os
              conteúdos são baseados na metodologia desenvolvida pelo Tri-campeão do ENART, Leonardo Brizola de Melo,
              adaptados para atender às necessidades individuais de cada aluno.
            </p>

            <h3 className="text-xl font-bold mb-2 text-acap-green-800 dark:text-acap-green-500">
              Estrutura Curricular
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              A academia oferecerá aulas para diferentes níveis de habilidade, desde iniciantes até avançados, com um
              foco contínuo no desenvolvimento e aprimoramento pessoal. As classes serão estruturadas de forma a
              permitir uma progressão natural, onde os alunos podem evoluir de acordo com seu próprio ritmo e dedicação.
            </p>

            <h3 className="text-xl font-bold mb-2 text-acap-blue-800 dark:text-acap-blue-600">Metodologia</h3>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              A metodologia de ensino será adaptativa, considerando as necessidades específicas e o ritmo de aprendizado
              de cada aluno. Não haverá um sistema de notas tradicional, enfatizando em vez disso a evolução individual.
              A avaliação será baseada no progresso pessoal e na capacidade de cada estudante de integrar novas
              habilidades e conhecimentos em sua prática. Também será aplicado uma adaptação da metodologia Challenge
              Based Learning (CBL), como uma maneira diferente de aprendizado e de desenvolver os alunos.
            </p>

            <h3 className="text-xl font-bold mb-2 text-acap-blue-800 dark:text-acap-blue-600">Progresso</h3>
            <p className="text-zinc-700 dark:text-zinc-300">
              O acompanhamento do progresso dos alunos será realizado por meio de avaliações periódicas informais, que
              ajudarão tanto os instrutores quanto os alunos a entender melhor as áreas que necessitam de mais atenção e
              a celebrar as conquistas ao longo do caminho.
            </p>

            <div className="mt-6 flex justify-center">
              <Button className="bg-acap-gold-600 hover:bg-acap-gold-700 text-white">
                <Link href="/programa-de-ensino">Ver programa completo</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Mission & Vision */}
      <section className="w-full max-w-6xl py-8 px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="border-b border-zinc-300 dark:border-zinc-700 bg-gradient-to-r from-acap-green-700 to-acap-green-900 clip-angular-sm">
            <CardTitle className="text-xl font-bold text-white">Missão</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-zinc-700 dark:text-zinc-300">
              A missão da Academia de Chula Adaga de Prata é cultivar chuleadores que sejam não apenas bons executores
              de movimentos, o objetivo é proporcionar um ambiente rico e estimulante, onde os integrantes possam
              desenvolver plenamente suas habilidades e estilos pessoais, tornando-se dançarinos inovadores e
              auto-suficientes.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="border-b border-zinc-300 dark:border-zinc-700 bg-gradient-to-r from-acap-blue-800 to-acap-blue-900 clip-angular-sm">
            <CardTitle className="text-xl font-bold text-white">Visão</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-zinc-700 dark:text-zinc-300">
              A visão da Academia de Chula Adaga de Prata é ser reconhecida como um epicentro de excelência em chula, de
              onde emergem dançarinos influentes e que sejam no cenário cultural. Almejamos formar um grupo coeso de
              chuleadores que não apenas dominem a arte da dança, mas que também atuem como embaixadores da cultura
              gaúcha, elevando e difundindo a arte da chula e do sapateado gaucho onde forem.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Galeria de Imagens
      <section className="w-full max-w-6xl py-12 px-4 md:px-8">
        <h2 className="text-2xl font-bold mb-6 text-zinc-800 dark:text-zinc-100">
          <span className="border-b-2 border-acap-gold-500 pb-1">Galeria</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="overflow-hidden rounded-md shadow-md border-2 border-acap-gold-600">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Apresentação de Chula"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-md shadow-md border-2 border-acap-green-700">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Aula de Chula"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-md shadow-md border-2 border-acap-blue-700">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Competição de Chula"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section> */}

      {/* Seção de Eventos */}
      <section className="w-full max-w-6xl py-12 px-4 md:px-8">
        <h2 className="text-2xl font-bold mb-6 text-zinc-800 dark:text-zinc-100">
          <span className="border-b-2 border-acap-blue-700 pb-1">Próximos Eventos</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.length > 0 ? (
            events.map((event) => (
              <Card key={event.id} className={`bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 shadow-md hover:shadow-lg transition-shadow`}>
                <CardHeader className={`border-b border-zinc-300 dark:border-zinc-700 ${event.color}`}>
                  <CardTitle className="text-lg font-bold text-white">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-zinc-700 dark:text-zinc-300 mb-2">
                    <strong>Data:</strong> {new Date(event.date).toLocaleDateString("pt-BR")}
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-2">
                    <strong>Local:</strong> {event.location}
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300">{event.description}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-zinc-700 dark:text-zinc-300">Nenhum evento encontrado.</p>
          )}
        </div>
      </section>

      <Button className="mt-6 bg-acap-gold-600 hover:bg-acap-gold-700 text-white border-none">
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdsE4qTCrloSgSzgVtYbcZhKJ2luafS6jCvJxbG2stduq9uCg/viewform?usp=header" className="flex items-center">
          Quero fazer parte! <ChevronRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>

      {/* Contact Section */}
      <section id="contato" className="w-full max-w-6xl py-8 px-4 md:px-8 mb-12">
        <div className="bg-zinc-200 dark:bg-zinc-800 p-6 md:p-8 rounded-md shadow-md border-t-4 border-acap-blue-700">
          <h2 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-zinc-100">Contato</h2>
          <p className="text-zinc-700 dark:text-zinc-300 mb-2">WhatsApp: +55 41 987826083</p>
          <p className="text-zinc-700 dark:text-zinc-300">
            Email:{" "}
            <a
              href="mailto:contato@adagadeprata.com.br"
              className="text-acap-blue-800 dark:text-acap-blue-600 hover:underline"
            >
              contato@adagadeprata.com.br
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}

