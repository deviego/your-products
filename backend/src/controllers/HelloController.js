class HelloController {
    async index(req, res) {
        console.log("dfsdaff")
       return res.status(200).json({hello:"beautiful world"})
    }
}

export default new HelloController();