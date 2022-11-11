import { Router } from 'express'

import {
  getEmployee,
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from '../../models/employees'

const router = Router()

router.get('/', async (req, res) => {
  const employees = await getEmployees()
  res.send(employees)
})

router.get('/:id', async (req, res) => {
  const employee = await getEmployee(req.params.id)
  if (employee) {
    res.send(employee)
  } else {
    res.status(404).send({ msg: 'Employee not found' })
  }
})

router.post('/', async (req, res) => {
  const employee = await addEmployee(req.body)
  res.send(employee)
})

router.put('/:id', async (req, res) => {
  const employee = await updateEmployee(req.params.id, req.body)
  if (employee) {
    res.send(employee)
  } else {
    res.status(404).send({ msg: 'Employee not found' })
  }
})

router.delete('/:id', async (req, res) => {
  const employee = await deleteEmployee(req.params.id)
  if (employee) {
    res.send(employee)
  } else {
    res.status(404).send({ msg: 'Employee not found' })
  }
})

export default router
