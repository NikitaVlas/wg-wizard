import express from 'express'
import mongoose from 'mongoose'

const app = express()

async function start() {
    try {
        await mongoose.connect(
            'mongodb+srv://wgwizard:wgwizard@cluster0.dwkadbg.mongodb.net/wg-wizard?retryWrites=true&w=majority'
        )

        app.listen(3002, () => console.log(`Server started on port: ${3002}`))
    } catch (error) {
        console.log(error)
    }
}

start()