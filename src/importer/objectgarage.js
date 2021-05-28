const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1RWKUmcfE9XYslR5GDldajorjTxCqBVM0UE7wBxeB6G4',
  {
    name: 'Object.Garage',
    instagram: 'https://www.instagram.com/object.garage/',
  },
);

launcher(scrap);

module.exports = {
  scrap,
};