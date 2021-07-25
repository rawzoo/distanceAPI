const express = require('express');
const distance = require('../distanceAPI/distance');
const app = express();

app.get('/distance', (req, res) => {

    if(!req.query.city1){
        return res.status(404).send({Error: 'You must Enter Source City'})
        
    }

    if(!req.query.city2){
        return res.status(404).send({Error: 'You must Enter Destination City'})
    }

  distance(req.query.city1, req.query.city2,(error,dis) => {
    if (error) {
        return res.status(404).send({ error })
    }
    res.send({
        distance:dis,
        sourceCity:req.query.city1,
        destinationCity:req.query.city2
    })
  });
});

app.listen(3000, () => {
  console.log('app is running on 3000');
});