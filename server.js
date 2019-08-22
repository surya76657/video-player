const express = require('express');
const app = express();
const path = require('path')
app.use(express.static(__dirname + '/dist'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/video-player/index.html'));
})

console.log('console Listening')