import express from 'express'
import path from 'path'

const router = express.Router()

router.route('/').get((req, res) => {
    res.sendFile(path.resolve() + '/index.html')
})

router.route('/page2').get((req, res) => {
    res.sendFile(path.resolve() + '/page2.html')
})

export default router