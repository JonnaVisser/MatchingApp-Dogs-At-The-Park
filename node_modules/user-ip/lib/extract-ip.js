'use strict';

function extractIP(req) {

    // Throw Error If Request Is Null Or Undefined
    if (!req) {
        throw new Error('Request Object Should Not Be Null Or Undefined');
    }


    const forwardedForHeader = (req.headers['x-forwarded-for'] || req.headers['X-Forwarded-For']);

    if (forwardedForHeader) {
        const userIP = forwardedForHeader.split(',')[0];
        return userIP;
    }

    const xRealIP = (req.headers['X-Real-IP'] || req.headers['x-real-ip']);
    if (xRealIP) {
        const userIP = xRealIP.split(',')[0];
        return userIP;
    }

    const clientRemoteAddress = req.client.remoteAddress;

    if (clientRemoteAddress) {
        const userIP = clientRemoteAddress;
        return userIP;
    }

}

module.exports = extractIP;