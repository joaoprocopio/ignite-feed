import styles from "./App.module.scss"

import { Header, Sidebar, Post } from "~/components"

export function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar />

        <main className={styles.content}>
          <Post />

          <Post />
        </main>
      </div>
    </>
  )
}
