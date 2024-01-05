import type { Schema, Attribute } from '@strapi/strapi';

export interface UserPreferences extends Schema.Component {
  collectionName: 'components_user_preferences';
  info: {
    displayName: 'preferences';
    icon: 'user';
  };
  attributes: {
    dark_mode: Attribute.Boolean;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'user.preferences': UserPreferences;
    }
  }
}
