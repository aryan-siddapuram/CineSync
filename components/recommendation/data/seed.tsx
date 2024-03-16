import fs from "fs"
import path from "path"
import { faker } from "@faker-js/faker"

import { stories, languages, platforms,categories, types, ratings, genres } from "./data"

const tasks = Array.from({ length: 100 }, () => ({
  ID: `M-${faker.number.int({ min: 1000, max: 9999 })}`,
  Name: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
  Duration: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
  Language: faker.helpers.arrayElement(languages).value,
  Genre: faker.helpers.arrayElement(genres).value,
  Platform: faker.helpers.arrayElement(platforms).value,
  Category: faker.helpers.arrayElement(categories).value,
  Type: faker.helpers.arrayElement(types).value,
  Story: faker.helpers.arrayElement(stories).value,
  Rating: faker.helpers.arrayElement(ratings).value,
}))

fs.writeFileSync(
  path.join(__dirname, "recommendations.json"),
  JSON.stringify(tasks, null, 2)
)

console.log("✅ Recommendations data generated.")