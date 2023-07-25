// @ts-nocheck
import { Factory } from "miragejs"
import { faker } from "@faker-js/faker"

export const factories = {
  author: Factory.extend({
    username() {
      return faker.internet
        .userName({
          firstName: this.firstName,
          lastName: this.lastName
        })
        .toLowerCase()
    },
    firstName() {
      return faker.person.firstName()
    },
    lastName() {
      return faker.person.lastName()
    },
    fullName() {
      return faker.person.fullName({
        firstName: this.firstName,
        lastName: this.lastName
      })
    },
    avatarUrl() {
      return faker.internet.avatar()
    },
    occupation() {
      return faker.person.jobTitle()
    }
  }),
  post: Factory.extend({
    content() {
      return faker.lorem.paragraphs({ min: 1, max: 3 })
    },
    postedAt() {
      return faker.date.recent()
    },
    authorId() {
      return faker.number.int({ min: 1, max: 30 })
    }
  })
}
