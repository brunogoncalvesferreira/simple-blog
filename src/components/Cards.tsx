import { useState } from "react"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

interface CardsProps {
  publishedAt: string
  title: string
  paragraph: string
}

export function Cards({ publishedAt, title, paragraph }: CardsProps) {
  const [like, setLike] = useState(false)

  function handleLike() {
    setLike(!like)
  }

  return (
    <div className={` w-full h-auto p-6 rounded-md bg-white mb-14`}>
      <header className={"flex items-center justify-between"}>
        <time className={"text-zinc-600"}>{publishedAt}</time>
        <button onClick={handleLike}>
          {like ? (
            <AiFillHeart size={20} color="green" />
          ) : (
            <AiOutlineHeart size={20} color="green" />
          )}
        </button>
      </header>

      <h2 className={"text-2xl text-gray-900 mt-6 mb-2"}>{title}</h2>

      <p className={"text-lg text-zinc-600 leading-8"}>{paragraph}</p>
    </div>
  )
}
