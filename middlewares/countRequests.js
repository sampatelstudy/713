const fs = require('fs');

// read json object from file
const readStats = () => {
  let result = {};
  try {
    result = JSON.parse(fs.readFileSync('./stats.json'));
  } catch (err) {
    console.error(err);
  }
  return result;
};

// dump json object to file
const dumpStats = (stats) => {
  try {
    fs.writeFileSync('./stats.json', JSON.stringify(stats), { flag: 'w+' });
  } catch (err) {
    console.error(err);
  }
};

exports.countRequests = (req, res, next) => {
  res.on('finish', () => {
    const stats = readStats();
    const event = `${req.method} `;
    stats[event] = stats[event] ? stats[event] + 1 : 1;
    dumpStats(stats);
    console.log(readStats());
  });
  next();
};
