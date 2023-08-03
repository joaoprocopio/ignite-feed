// @ts-nocheck
import sampleSize from "lodash/sampleSize"
import random from "lodash/random"
import range from "lodash/range"
import shuffle from "lodash/shuffle"

import { Factory } from "miragejs"
import { faker } from "@faker-js/faker"

import { replySeeds, authorSeeds } from "~/mocks/seeds"

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
    coverImageUrl() {
      return faker.image.urlPlaceholder({ width: 256, height: 80 })
    },
    occupation() {
      return faker.person.jobTitle()
    }
  }),
  post: Factory.extend({
    content() {
      return faker.lorem.paragraphs({ min: 1, max: 5 })
    },
    createdAt() {
      return faker.date.recent()
    },
    authorId() {
      return faker.number.int({ min: 1, max: authorSeeds })
    },
    replyIds() {
      return sampleSize(shuffle(range(1, replySeeds)), random(1, 3))
    }
  }),
  reply: Factory.extend({
    content() {
      return faker.lorem.paragraphs({ min: 1, max: 2 })
    },
    authorId() {
      return faker.number.int({ min: 1, max: authorSeeds })
    },
    createdAt() {
      return faker.date.recent()
    }
  })
}
