const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>SoftTech DevOps Platform</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background: linear-gradient(to right, #1e3c72, #2a5298);
                color: white;
                text-align: center;
                padding-top: 100px;
            }

            .container {
                background: rgba(255,255,255,0.1);
                padding: 40px;
                border-radius: 15px;
                width: 60%;
                margin: auto;
            }

            h1 {
                font-size: 45px;
            }

            p {
                font-size: 22px;
            }

            .btn {
                background: #28a745;
                color: white;
                padding: 15px 30px;
                border: none;
                border-radius: 8px;
                text-decoration: none;
                font-size: 18px;
            }

            .btn:hover {
                background: #218838;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 SoftTech DevOps Platform</h1>

            <p>
                Real-Time CI/CD Pipeline using
                GitHub, Jenkins, Docker and Kubernetes
            </p>

            <h3>DevOps Project by Asif</h3>

            <br>

            <a href="#" class="btn">Learn More</a>
        </div>
    </body>
    </html>
    `);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
