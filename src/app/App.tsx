import { Header, Post } from "~/components"

export function App() {
  return (
    <>
      <Header />
      <div className="mx-auto grid max-w-6xl grid-cols-[256px,1fr] items-start gap-x-8 py-8">
        <aside className="bg-secondary-600">a</aside>
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
