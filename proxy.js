const http = require("http");

const proxy = http.createServer((req, res) => {
  const options = {
    hostname: "127.0.0.1",
    port: 6000,
    path: req.url,
    method: req.method,
    headers: req.headers,
  };
  const proxyReq = http.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res);
  });
  proxyReq.on("error", (err) => {
    res.writeHead(502);
    res.end("Proxy error: " + err.message);
  });
  req.pipe(proxyReq);
});

proxy.listen(3001, "0.0.0.0", () => {
  console.log("Proxy ready → http://localhost:3001  (forwarding to :6000)");
});
