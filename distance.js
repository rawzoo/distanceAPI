const needle = require('needle');

const distance = (City1, City2,callback) => {
  const URL =
    'https://www.distance24.org/route.json?stops=+' + City1 + '|' + City2;

  needle.get(URL ,{json: true }, (error,res) => {
      if(error){
          callback('Unable to connect',undefined)
      } else if(res.error){
          callback('Unable to find distnace',undefined)
      } else {
          callback(undefined,res.body.distance)
      }
      
});
}

module.exports = distance;
