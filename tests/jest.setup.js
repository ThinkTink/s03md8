const { beforeEach } = require('@jest/globals');
const { runSeed } = require('../src/db/seed');
const db = require('../src/db/db');

// Seed db before each test case.
beforeEach(async () => {
  await db.sync();
  await runSeed();
});

afterAll(async () => {
  await db.close();
});
