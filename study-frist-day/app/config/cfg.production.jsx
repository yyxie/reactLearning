/**
 * Created by ruiy on 10/9/15.
 */

'use strict';

import AppConfig from './make.config.jsx';

let baseUrl = "";
let baseDir = baseUrl + "/upms";
let UA = "Apartment";

module.exports = AppConfig({
    baseUrl: baseUrl,
    baseDir: baseDir,
    UA: UA
});
