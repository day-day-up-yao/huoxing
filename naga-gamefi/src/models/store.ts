import { useMemo } from 'react';
import { RematchDispatch, RematchRootState, RematchStore, init, Plugin } from '@rematch/core';
import immerPlugin from './immer';
import { RootModel, models } from './root';

let store: RematchStore<Record<string, any>, Record<string, any>>;

const immer: Plugin<RootModel> = immerPlugin();
export const initializeStore = (initialState?: RootState) => {
  if (initialState) {
    return init({
      models,
      plugins: [immer],
      redux: {
        initialState,
      },
    });
  }
  return init({
    models,
    plugins: [immer],
  });
};

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;

export const reduxStore = () => {
  const initStore = initializeStore();
  return { dispatch: initStore.dispatch, getState: initStore.getState };
};
export function useStore(initialState?: RootState) {
  const storeLast = useMemo(() => initializeStore(initialState), [initialState]);
  return storeLast;
}
