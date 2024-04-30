import { Models } from '@rematch/core';
import { common } from './subs/common';
import { user } from './subs/user';
import { comment } from './subs/comment';
import { overview } from './subs/overview';
import { quest } from './subs/quest';
import { element } from './subs/element';

export interface RootModel extends Models<RootModel> {
  common: typeof common;
  user: typeof user;
  comment: typeof comment;
  overview: typeof overview;
  quest: typeof quest;
  element: typeof element;
}

export const models: RootModel = {
  common,
  user,
  comment,
  overview,
  quest,
  element,
};
