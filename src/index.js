/**
 Node Script Source
 to see more visit: https://blog.developer.atlassian.com/scripting-with-node/

 Command Line Interface Support was built with Commander
 to see more about it, visit: https://www.npmjs.com/package/commander#declaring-program-variable

 */

import https from 'https';
import {program} from 'commander';
import pkg from '@package';

const exits = {
    error: 1,
    success: 0
};
const getScriptName = ({bin} = {}, name) => {
    return Object.entries(bin || {}).filter(([, val]) => val.match(name))?.[0]?.[0] || "defaultName"
};

const splitList = (value) => {
    return value.split(",");
};
const main = function ({seller_id, site_id}) {

    console.log(JSON.stringify({seller_id, site_id}));


    process.exit(exits.success);

};

program
    .name(getScriptName(pkg, "./dist/index.js"))
    .usage("[global options]")
    .requiredOption('--seller_id <seller>', 'Please define seller_id [ You could define many sellers in a comma separated list ] ', splitList)
    .requiredOption('--site_id <site>', 'Please define site_id')
    .action(main)
    .parse(process.argv);
