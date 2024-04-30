// 此代码完全拷贝自@rematch/immer，只是为了解决import produce from 'immer'引入的类型问题
// 会报错 - warn ./node_modules/@rematch/immer/dist/immer.esm.js Attempted import error: 'immer' does not contain a default export (imported as 'produce').
// 改成 import { produce } from 'immer';

import { Plugin, Models } from '@rematch/core';
import { produce } from 'immer';
import Redux from 'redux';

export type ImmerPluginConfig = {
  whitelist?: string[];
  blacklist?: string[];
};

function wrapReducerWithImmer(reducer: Redux.Reducer) {
  return (state: any, payload: any): any => {
    if (state === undefined) return reducer(state, payload);
    return produce(state, (draft: any) => reducer(draft, payload));
  };
}

const immerPlugin = <
  TModels extends Models<TModels>,
  TExtraModels extends Models<TModels> = Record<string, never>,
>(
  config?: ImmerPluginConfig
): Plugin<TModels, TExtraModels> => ({
  onReducer(reducer: Redux.Reducer, model: string): Redux.Reducer | void {
    if (
      !config ||
      (!config.whitelist && !config.blacklist) ||
      (config.whitelist && config.whitelist.includes(model)) ||
      (config.blacklist && !config.blacklist.includes(model))
    ) {
      return wrapReducerWithImmer(reducer);
    }

    return undefined;
  },
});

export default immerPlugin;
