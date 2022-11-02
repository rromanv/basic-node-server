import { Router } from 'express'

import {
  getPersons,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
} from '../../models/persons'

const router = Router()

router.get('/', async (req, res) => {
  const persons = await getPersons()
  res.send(persons)
})

router.get('/:id', async (req, res) => {
  const person = await getPerson(req.params.id)
  if (person) {
    res.send(person)
  } else {
    res.status(404).send({ msg: 'Person not found' })
  }
})

router.post('/', async (req, res) => {
  const newPerson = await createPerson(req.body)
  if (newPerson) {
    res.status(201).send(newPerson)
  } else {
    res.status(400).send({ msg: 'Bad request' })
  }
})

router.put('/:id', (req, res) => {
  const updatedPerson = updatePerson(req.params.id, req.body)
  if (updatedPerson) {
    res.send(updatedPerson)
  }
  res.status(404).send({ msg: 'Person not found' })
})

router.delete('/:id', (req, res) => {
  const deleted = deletePerson(req.params.id)
  if (deleted) {
    res.send({ msg: `Person ${req.params.id} Deleted` })
  }
  res.status(404).send({ msg: 'Person not found' })
})

export default router
