const express = require('express');
const app = express();
app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.get('/', (req, res) => res.send('devops-k8s-demo running'));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}`));
