import { Header, Post, Sidebar } from "~/components"

export function App() {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <main>
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
