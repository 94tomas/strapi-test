import type { Schema, Attribute } from '@strapi/strapi';

export interface SubSubscribete extends Schema.Component {
  collectionName: 'components_sub_subscribetes';
  info: {
    displayName: 'Subscribete';
    icon: 'cube';
  };
  attributes: {
    Email: Attribute.String & Attribute.Required & Attribute.Unique;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'sub.subscribete': SubSubscribete;
    }
  }
}
