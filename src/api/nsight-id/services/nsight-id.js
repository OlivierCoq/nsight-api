'use strict';

/**
 * nsight-id service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nsight-id.nsight-id');
