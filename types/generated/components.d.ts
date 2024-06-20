import type { Schema, Attribute } from '@strapi/strapi';

export interface ChatChatMessage extends Schema.Component {
  collectionName: 'components_chat_chat_messages';
  info: {
    displayName: 'chat_message';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    media: Attribute.Media;
    sender: Attribute.JSON & Attribute.Required;
    receiver: Attribute.JSON & Attribute.Required;
    body: Attribute.RichText;
    seen: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface UserPreferences extends Schema.Component {
  collectionName: 'components_user_preferences';
  info: {
    displayName: 'preferences';
    icon: 'user';
    description: '';
  };
  attributes: {
    dark_mode: Attribute.Boolean;
    default_dashboard_tab: Attribute.Enumeration<
      ['my_friends', 'my_profile', 'current']
    > &
      Attribute.DefaultTo<'my_friends'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'chat.chat-message': ChatChatMessage;
      'user.preferences': UserPreferences;
    }
  }
}
