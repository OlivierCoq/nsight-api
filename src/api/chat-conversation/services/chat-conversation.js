'use strict';

/**
 * chat-conversation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chat-conversation.chat-conversation');
