const http = require('http'); 
const fs = require('fs'); 
const PORT = 3001;

const server = http.createServer((req, res) => {
 
  const path = req.url;
  if (path === '/' || path === '/index') {
    fs.readFile('./views/index.html', 'utf8', (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (path === '/about') {
    fs.readFile('./views/about.html', 'utf8', (err, data) =>  {
      if (err) {
        console.error("Error reading file:", err); 
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});


server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

