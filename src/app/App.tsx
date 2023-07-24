import "~/assets/styles/main.css"

import { Header, Sidebar, Post } from "~/components"

export function App() {
  return (
    <>
      <Header />
      <div className="mx-auto grid max-w-6xl grid-cols-[256px,1fr] items-start gap-x-8 p-8">
        <Sidebar />

        <main className="flex flex-col gap-8">
          <Post />

          <Post />
        </main>
      </div>
    </>
  )
}
