import { PencilSimpleLine } from "@phosphor-icons/react"

import { Header, Post } from "~/components"

export function App() {
  return (
    <>
      <Header />
      <div className="mx-auto grid max-w-6xl grid-cols-[256px,1fr] items-start gap-x-8 p-8">
        <aside className="overflow-hidden rounded-lg bg-secondary-600">
          <img
            className="h-20 w-full object-cover"
            src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
          />

          <div className="flex flex-col items-center pb-6">
            <img
              className="-mt-8 mb-4 box-content h-12 w-12 rounded-lg border-4 border-secondary-600 outline outline-2 outline-primary-400"
              src="https://avatars.githubusercontent.com/u/88688324"
            />

            <strong className="font-bold leading-relaxed text-secondary-100">
              João Procópio
            </strong>
            <span className="text-sm leading-relaxed">
              Camisa 10 do Botafogo
            </span>
          </div>

          <footer className="w-full border-t border-t-secondary-500 px-8 pb-8 pt-6">
            <a
              href="#"
              className="flex h-14 items-center justify-center gap-2 rounded-lg border border-primary-400 bg-transparent px-6 py-4 font-bold text-primary-400 transition-colors duration-300 hover:bg-primary-400 hover:text-white">
              <PencilSimpleLine size="20px" weight="bold" />
              <span>Editar seu perfil</span>
            </a>
          </footer>
        </aside>

        <main className="flex flex-col gap-8">
          <Post
            post={{
              author: "João Procópio",
              content:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, impedit harum? Odio maiores eaque labore laboriosam neque sit veritatis quo accusantium, rem ea in nulla, quae earum, illo rerum ab!"
            }}
          />

          <Post
            post={{
              author: "Willian Bittencourt",
              content:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, impedit harum? Odio maiores eaque labore laboriosam neque sit veritatis quo accusantium, rem ea in nulla, quae earum, illo rerum ab!"
            }}
          />
        </main>
      </div>
    </>
  )
}
