import { Router } from 'express'

import persons from './persons'
import companies from './companies'
import departments from './departments'

const router = Router()

router.get('/', (req, res) => {
  res.send({ msg: 'Inside API Endpoints' })
})

router.use('/persons', persons)
router.use('/companies', companies)
router.use('/departments', departments)

export default router
