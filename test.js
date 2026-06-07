require('ts-node').register();
const { askAI } = require('./artifacts/jordan-herbs/services/aiService.ts');
askAI('?????').then(console.log).catch(console.error);
