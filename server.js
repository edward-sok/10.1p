const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")
const cors = require("cors")
const { request } = require("http")


const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cors())
app.use(bodyParser.json())


app.get('/', (req,res)=>{
    const user = {
        username:"Deakin",
        password:"123"
    }
    res.send(user)
})

app.post('/', (req,res)=>{
    const email= req.body.email
    const data = {
        members:[{
            email_address: email,
            status : "subscribed",
    }]
}

jsonData = JSON.stringify(data)

const apikey = "358cf6aee75a7eadac828789f77de41a-us12"
const url= "https://us12.api.mailchimp.com/3.0/lists/ca0ec27834"
const options={
    method:"POST",
    auth:"ed:358cf6aee75a7eadac828789f77de41a-us12"
}

const request = https.request(url, options, (response)=>{
    response.on("data", (data)=>{
        console.log(JSON.parse(data))
    })
})

request.write(jsonData)
request.end()
console.log(firstname, lastname, email)
})


app.listen(3005, function(){
console.log("Server is running on port 3005")
})

