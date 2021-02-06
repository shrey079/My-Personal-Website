const express = require('express')
const app = express(); 
const port = 3000; 
app.use(express.static('public')); /* this line tells Express to use the public folder as our static folder from which we can serve static files*/



// Replies to get request for the root dir on localhost::3000
app.get('/', (req, res) => { 
    // ***************  Send the index(home) page ********************
    // res.sendFile('index.html');
    res.send("Hello world")
})

// Replies to get requests for "/about" on localhost::3000
app.get('/about', (req, res) => { 
    // *************** Send the about page *********************
    // res.sendFile('about.html');
    res.send("Hello world")
})

// just in case someone tries to go to a page that doesn't exist we can send them back to the root page
app.get('/:trash', (req, res) => { 
    // ***************  Send the home page ********************
    res.send("Hello world")
})


// This ensures that our app listens for req's on the correct port aka port 3000
app.listen(port, () => { 
    console.log("Listening on Port 3000!")
})


// Steps to host the website on your local machine
// 1) Download node.js if you don't have it already
// 2) Make a directory for hackathon
// 3) Navigate to that hackathon directory in your terminal and then run "npm i express"
// 4) make a directory inside that folder called 'public'
// 5) Add your Html,css and js files
// 6) Change the files name to index.html or about.html accordingly
// 7) copy paste the code above into the /hackathon directory under a file named app.js
// 8) Then uncomment the lines that say res.sendFile()
// 9) go to terminal and make sure you're in the Uottahack directory
// 10) run "node app.js"
// 11) in chrome open "localhost::3000" and your website should be there