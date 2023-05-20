import { ChangeEvent, useState } from "react"
import { Cards } from "./components/Cards"
import { MagnifyingGlass } from "@phosphor-icons/react"
import { Header } from "./components/Header"

const data = [
  {
    id: 1,
    publishedAt: "02 de jul, 2021",
    title: "Agora é oficial: o Windows 11 está vindo",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
  },

  {
    id: 2,
    publishedAt: "03 de Ago, 2022",
    title: "Tim Berners-Lee vai leiloar código-fonte da web",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.",
  },

  {
    id: 3,
    publishedAt: "25 de Dez, 2022",
    title: "Tem Firefox novo no pedaço e você vai querer migrar",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.",
  },

  {
    id: 4,
    publishedAt: "05 de Jan, 2023",
    title: "John McAfee, criador do antivírus McAfee, morre",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.",
  },
]

export function App() {
  const [search, setSearch] = useState("")

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value.toLowerCase())
  }
  return (
    <div>
      <Header />

      <form className={"relative max-w-4xl w-[90%] mx-auto -mt-28"} action="">
        <input
          value={search}
          onChange={handleChange}
          className={
            "w-full h-16 bg-white/20 rounded-md px-14 text-white text-lg placeholder:text-white outline-none border-none"
          }
          type="text"
          placeholder="Pesquisar no blog"
        />
        <span className={"absolute top-0 left-0 mt-4 ml-4"}>
          <MagnifyingGlass size={26} color="white" />
        </span>
      </form>

      <div className={"max-w-4xl w-[90%] mx-auto mt-40"}>
        {data
          .filter((filt) => filt.title.toLowerCase().includes(search))
          .map((content) => (
            <Cards
              key={content.id}
              publishedAt={content.publishedAt}
              title={content.title}
              paragraph={content.paragraph}
            />
          ))}
      </div>
    </div>
  )
}
