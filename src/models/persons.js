import { PrismaClient } from '@prisma/client'
import { v4 as uuid } from 'uuid'

const db = new PrismaClient()

const persons = []

export const getPersons = async () => db.employee.findMany()

export const getPerson = async (id) => {
  return db.employee.findFirst({
    where: {
      id: Number(id),
    },
  })
}

export const createPerson = async (person) => {
  return db.employee.create({ data: { ...person } })
}

export const updatePerson = (id, person) => {
  const databasePerson = getPerson(id)
  if (databasePerson) {
    const personIndex = persons.findIndex((p) => p.id === id)
    persons[personIndex] = { id, ...person }
  }
  return getPerson(id)
}

export const deletePerson = (id) => {
  const personIndex = persons.findIndex((p) => p.id === id)
  if (personIndex !== -1) {
    persons.splice(personIndex, 1)
    return true
  }
  return false
}
