import Logo from "~/assets/icons/logo.svg"

export function Header() {
  return (
    <header className="mx-auto flex justify-center bg-secondary-600 py-6">
      <span className="mr-4 h-8">
        <Logo />
      </span>
      <span className="text-xl font-bold text-secondary-100">Ignite Feed</span>
    </header>
  )
}
