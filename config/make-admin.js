const path = require('path');
const mongoose = require('mongoose');
const { User } = require('@librechat/data-schemas').createModels(mongoose);
require('module-alias')({ base: path.resolve(__dirname, '..', 'api') });
const { silentExit } = require('./helpers');
const connect = require('./connect');

(async () => {
  await connect();

  const email = process.argv[2];

  if (!email) {
    console.orange('Usage: npm run make-admin <email>');
    console.orange('Example: npm run make-admin user@example.com');
    silentExit(1);
  }

  const user = await User.findOne({ email });

  if (!user) {
    console.red(`Error: User with email "${email}" not found!`);
    silentExit(1);
  }

  console.orange(`Found user: ${user.name || user.username} (${user.email})`);
  console.orange(`Current role: ${user.role || 'USER'}`);

  user.role = 'ADMIN';
  user.accountStatus = 'active'; // Ensure account is active
  await user.save();

  console.green('\n✅ User promoted to ADMIN successfully!');
  console.green(`New role: ${user.role}`);
  console.green('\nPlease log out and log back in on the web interface for changes to take effect.');
  silentExit(0);
})();
