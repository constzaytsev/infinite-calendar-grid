import { faker } from '@faker-js/faker'

const createItem = (date: Date) => ({
  id: faker.string.nanoid(),
  name: faker.word.verb(),
  date: date.getTime()
})

export const createItems = () => {
  return faker.date
    .betweens({
      from: '2023-01-01T00:00:00.000Z',
      to: '2025-01-01T00:00:00.000Z',
      count: 300
    })
    .map(createItem)
}
