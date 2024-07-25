const express = require('express');
const app = express();

app.use(express.static('public', {
  setHeaders: (res, path, stat) => {
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  },
}));

app.listen(3000);