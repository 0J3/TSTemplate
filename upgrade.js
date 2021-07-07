// Copyright (C) 2021 0J3.
// Licensed under the MIT License.

// Upgrades software and shit

console.log(`
➤ UPGRADE
    Welcome to the Upgrade Script
    This script will upgrade vital dependencies like typescript to their latest
    version, regardless of compatability, and the rest get normally upgraded`);

console.log('➤ Importing Modules');
const { pour } = require('std-pour');
const fs = require('fs');

console.log('➤ Removing Lockfiles');
try {
	fs.unlinkSync('./yarn.lock');
} catch (e) {}
try {
	fs.unlinkSync('./package-lock.json');
} catch (e) {}

console.log('➤ Upgrading Packages...');
pour('yarn', ['add', 'typescript@latest', 'yarn@latest', '-D']);
pour('yarn', ['upgrade']);
pour('yarn', ['set', 'version', 'latest']);
