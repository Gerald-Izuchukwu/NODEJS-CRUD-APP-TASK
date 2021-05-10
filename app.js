const express = require('express')
const port = 8002
const app = express()
const connection = require('./connectdb')
const User = require('./models/user')
connection()

app.use(express.json())

// this route '/' gets the page that displays the payload ( success message and the data)

app.get('/', async(req,res,next)=>{
    try {
        const users = await User.find({})
        const response = {
            message:'succesfull',
            data: users
        }
        res.send(response)
    } catch (error) {
        next(error)
    }
})

// this gets only the data in the object.
app.get('/data', async(req,res,next)=>{
    try {
        const users = await User.find({})
        const response = {
            // message:'succesfull',
            data: users
        }
        res.send(response)
    } catch (error) {
        next(error)
    }
})

// this route allows the user to create a new data
app.post('/new', async (req, res, next) => {
    try {
        const input = req.body
        const user = new User(input)
        await user.save()
        const response = {
            message: "successful",
            data: user
        }
        res.send(response)
    } catch (error) {
        console.log(error)
        next(error)
    }
})
//get the data by id
app.get('/get/:id', async(req,res,next)=>{
    try {
        const id = req.params.id
        const user = await User.find({_id: id})
        const response = {
            message: "successful",
            data: user
        }
        res.send(response)
    } catch (error) {
        next(error)
    }
})
/*delete by id
this allows the user to delete a particular data created by providing that ID*/
app.delete('/delete/:id', async (req,res, next)=>{
    try {
        const id = req.params.id
        const delData = await User.findOneAndDelete({_id: id})
        if (!delData) {
            const err = new Error('No data found')
            next(err)
            return
        }
        const response = {
            message: "successful",
            data: delData
        }
        res.send(response)
    } catch (error) {
        next(error)
    }
})

/*modify data by id
allows a user to modify a particular data*/
app.patch('/patch/:id', async (req,res,next)=>{
    try {
        const id = req.params.id
        const data = await User.findOne({_id: id})
        if (!data) {
            const err = new Error('No data found')
            next(err)
            return
        }
        data.email = req.body.email?req.body.email:data.email
        data.country = req.body.country?req.body.country:data.country
        data.name = req.body.name? req.body.name:data.name
        await data.save()
        const response = {
            message: "successful",
            data: data
        }
        res.send(response)
    } catch (error) {
        next(error)
    }
})
//404 error
app.use(async(req,res,next)=>{
    const err = new Error('Not found')
    res.status(404)
    next(err)
})

//other errors
app.use(async (err, req, res, next) => {
    const errorCode = res.statusCode === 200 ? 500 : res.statusCode
    console.log(err.message)
    res.status(errorCode)
    res.json({
        message: err.message,
    })
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})