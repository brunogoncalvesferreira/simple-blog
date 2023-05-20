export function Header() {
  return (
    <header
      className={"bg-gradient-to-r from-green-500 to-gray-500 w-full h-60"}
    >
      <nav
        className={
          "max-w-4xl w-[90%] mx-auto flex items-center justify-between"
        }
      >
        <strong className={"mt-10 text-white text-2xl"}>blog</strong>
        <strong className={"mt-10 text-white text-2xl"}>bruno</strong>
      </nav>
    </header>
  )
}
