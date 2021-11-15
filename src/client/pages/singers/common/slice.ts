import { RootState } from '@/client/store'
import { Singer, Stat } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SingersState {
  singerList: Singer[]
  stat: Stat
  // enterLoading: boolean
  // pullUpLoading: boolean
  // pullDownLoading: boolean
  pageOffset: number
}

const initialState: SingersState = {
  singerList: [],
  stat: 'idle',
  // enterLoading: true, // 控制进场Loading
  // pullUpLoading: false, // 控制上拉加载动画
  // pullDownLoading: false, // 控制下拉加载动画
  pageOffset: 0, // 这里是当前页数，我们即将实现分页功能
}

export const SINGERS_SLICE_NAME = 'singer-slice'

export const singersSlice = createSlice({
  name: SINGERS_SLICE_NAME,
  initialState,
  reducers: {
    setOffset(state, payload: PayloadAction<number>) {
      state.pageOffset = payload.payload
    },
    setStat(state, { payload }: PayloadAction<Stat>) {
      state.stat = payload
    },

    // setEnterLoading(state, { payload }: PayloadAction<boolean>) {
    //   state.enterLoading = payload
    // },
    // setPullUpLoading(state, { payload }: PayloadAction<boolean>) {
    //   state.pullUpLoading = payload
    // },
    // setPullDownLoading(state, { payload }: PayloadAction<boolean>) {
    //   state.pullDownLoading = payload
    // },
    setSingerList(
      state,
      { payload }: PayloadAction<Singer[] | Promise<Singer[]>>,
    ) {
      // @ts-ignore
      // redux-promise
      state.singerList = payload
    },
    addSingersToSingerList(
      state,
      { payload }: PayloadAction<Singer[] | Promise<Singer[]>>,
    ) {
      // @ts-ignore
      // redux-promise
      state.singerList = [...state.singerList, ...payload]
    },
  },
})

export const {
  setOffset,
  setStat,
  // setEnterLoading,
  // setPullDownLoading,
  // setPullUpLoading,
  setSingerList,
  addSingersToSingerList,
} = singersSlice.actions

// export const selectEnterLoading = (state: RootState) =>
//   state[SINGERS_SLICE_NAME].enterLoading
// export const selectPullUpLoading = (state: RootState) =>
//   state[SINGERS_SLICE_NAME].pullUpLoading
// export const selectPullDownLoading = (state: RootState) =>
//   state[SINGERS_SLICE_NAME].pullDownLoading
export const selectStat = (state: RootState) => state[SINGERS_SLICE_NAME].stat
export const selectSingerList = (state: RootState) =>
  state[SINGERS_SLICE_NAME].singerList
export const selectOffset = (state: RootState) =>
  state[SINGERS_SLICE_NAME].pageOffset
export default singersSlice.reducer
