import express from 'express'


const routes = express()

routes.get("./hello", (req, res) => {
    res.status(200).json({hello: "beautiful world"})
})



export default routes