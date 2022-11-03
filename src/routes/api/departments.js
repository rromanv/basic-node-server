import { Router } from 'express'

import { getDepartments, getDepartment } from '../../models/departments'

const router = Router()

router.get('/', async (req, res) => {
  const companies = await getDepartments()
  res.send(companies)
})

router.get('/:id', async (req, res) => {
  const department = await getDepartment(req.params.id)
  if (department) {
    res.send(department)
  } else {
    res.status(404).send({ msg: 'Department not found' })
  }
})

export default router
