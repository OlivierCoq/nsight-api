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

export interface CommentThreadsComment extends Schema.Component {
  collectionName: 'components_comment_threads_comments';
  info: {
    displayName: 'comment';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
    commenter: Attribute.Relation<
      'comment-threads.comment',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    visible: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    replies: Attribute.Component<'comment-threads.reply', true>;
  };
}

export interface CommentThreadsReply extends Schema.Component {
  collectionName: 'components_comment_threads_replies';
  info: {
    displayName: 'reply';
    icon: 'write';
  };
  attributes: {
    body: Attribute.RichText;
    user: Attribute.Relation<
      'comment-threads.reply',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    target: Attribute.String;
  };
}

export interface GeneralLink extends Schema.Component {
  collectionName: 'components_general_links';
  info: {
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    link_text: Attribute.RichText;
    href: Attribute.RichText;
  };
}

export interface PostsReactions extends Schema.Component {
  collectionName: 'components_posts_reactions';
  info: {
    displayName: 'reactions';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    upvotes: Attribute.Integer & Attribute.DefaultTo<0>;
    downvotes: Attribute.Integer & Attribute.DefaultTo<0>;
  };
}

export interface ProfilesTag extends Schema.Component {
  collectionName: 'components_profiles_tags';
  info: {
    displayName: 'tag';
    icon: 'layout';
  };
  attributes: {
    tag_name: Attribute.String;
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
      'comment-threads.comment': CommentThreadsComment;
      'comment-threads.reply': CommentThreadsReply;
      'general.link': GeneralLink;
      'posts.reactions': PostsReactions;
      'profiles.tag': ProfilesTag;
      'user.preferences': UserPreferences;
    }
  }
}
