const axios = require('axios')
const developer = require('../models/dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {

    async index(req, res) {
        const devs = await developer.find()

        return res.json(devs)
    },

    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body

        let dev = await developer.findOne({ github_username })

        if (!dev) {
            const response = await axios.get(`https://api.github.com/users/${github_username}`)

            const { name = login, avatar_url, bio } = response.data

            const techsArray = parseStringAsArray(techs)

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }

            dev = await developer.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
        }

        return res.json(dev)
    }
}
