import { rest, setupWorker } from "msw"

const views = [
  rest.get("/hw", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        hello: "world"
      })
    )
  })
]

export const worker = setupWorker(...views)
