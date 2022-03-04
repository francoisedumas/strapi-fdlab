'use strict';

/**
 * til service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::til.til');
