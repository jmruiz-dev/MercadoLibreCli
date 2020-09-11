/**
 Node Script Source
 to see more visit: https://blog.developer.atlassian.com/scripting-with-node/

 Command Line Interface Support was built with Commander
 to see more about it, visit: https://www.npmjs.com/package/commander#declaring-program-variable

 */

import 'babel-polyfill';
import {program} from 'commander';
import axios from 'axios';
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

const labelMaxLength = 20;
const idMaxLength = 15;
const formatText = function (text, maxlength = 0) {
    const factor = text.length > maxlength ? 0 : maxlength - text.length;
    return "'" + text + "'" + ' '.repeat(factor)
};
const main = async function ({seller_id: sellerIds, site_id: siteId, extended}) {

    for (const currentSellerId of sellerIds) {
        const {data} = await axios.get(`https://api.mercadolibre.com/sites/${siteId}/search?seller_id=${currentSellerId}`);

        for (const row of data.results) {

            const {id, title, category_id, seller: {nickname}} = row;

            const {data: {name: categoryName}} = await axios.get(`https://api.mercadolibre.com/categories/${category_id}`);

            console.log((extended?`Provider:${formatText(nickname, labelMaxLength)} `:'')+`Id:${formatText(id, idMaxLength)} CategoryName:${formatText(categoryName, labelMaxLength)} CategoryId:${formatText(category_id, labelMaxLength)} Title:'${title}' `)
        }


    }


    process.exit(exits.success);

};

program
    .name(getScriptName(pkg, "./dist/index.js"))
    .usage("[global options]")
    .requiredOption('--seller_id <seller>', 'Please define seller_id [ You could define many sellers in a comma separated list ] ', splitList)
    .requiredOption('--site_id <site>', 'Please define site_id')
    .option('-e, --extended', 'display provider name for each product', false)
    .action((...args) => main(...args))
    .parse(process.argv);
