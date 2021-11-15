import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import reduxPromise from 'redux-promise'
import { INIT_STATE } from '@/shared/constant'
import recommendReducer, {
  RECOMMEND_SLICE_NAME,
} from '../pages/recommend/slice'
import singersReducer, {
  SINGERS_SLICE_NAME,
} from '../pages/singers/common/slice'

export function getStore() {
  let preloadedState
  // @ts-ignore
  if (!import.meta.env.SSR) {
    // @ts-ignore
    // redux-promise
    preloadedState = window[INIT_STATE]
  }
  return configureStore({
    reducer: {
      [RECOMMEND_SLICE_NAME]: recommendReducer,
      [SINGERS_SLICE_NAME]: singersReducer,
    },
    middleware(getDefaultMiddlewares) {
      return [reduxPromise, ...getDefaultMiddlewares()]
    },
    preloadedState,
  })
}

let dummyStore: ReturnType<typeof getStore>

export type Store = typeof dummyStore
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof dummyStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof dummyStore.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
