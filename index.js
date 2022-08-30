const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.unlink('second.txt',(err, data) => {
            if (err) {
                res.write("Failed to read the data");
                res.end();
            } else {
                res.write("Successfully deleted the second.txt file");
                res.end();
            }
        })
        // fs.appendFile('second.txt'," No! It will be full not pull ! 😑", (err, data) => {
        //     if (err) {
        //         res.write("Failed to read the data");
        //         res.end();
        //     } else {
        //         res.write("Data written successfully");
        //         res.end();
        //     }
        // })
        // fs.writeFile('second.txt'," I am a pull stack developer !!! 🤣", (err, data) => {
        //     if (err) {
        //         res.write("Failed to read the data");
        //         res.end();
        //     } else {
        //         res.write("Data written successfully");
        //         res.end();
        //     }
        // })
    // if (req.url === '/') {
    //     fs.readFile('first.txt', (err, data) => {
    //         if (err) {
    //             res.write("Failed to read the data");
    //             res.end();
    //         } else {
    //             res.write(data);
    //             res.end();
    //         }
    //     })
    }
});

const PORT = 5000;
server.listen(PORT);

console.log(`Server is running at ${PORT}`);