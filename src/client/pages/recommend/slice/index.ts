import { RootState } from '@/client/store'
import { Banner, Song } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
type Banners = Banner[]
type Songs = Song[]
export interface RecommendState {
  bannerList: Banners
  recommendList: Songs
}
const initialState: RecommendState = {
  bannerList: [],
  recommendList: [],
}
export const RECOMMEND_SLICE_NAME = 'recommend-slice'
export const recommendSlice = createSlice({
  name: RECOMMEND_SLICE_NAME,
  initialState,
  reducers: {
    setBannerList(state, action: PayloadAction<Banners | Promise<Banners>>) {
      // @ts-ignore
      // redux-promise
      state.bannerList = action.payload
    },
    setRecommendList(state, action: PayloadAction<Songs | Promise<Songs>>) {
      // @ts-ignore
      // redux-promise
      state.recommendList = action.payload
    },
  },
})

export const { setBannerList, setRecommendList } = recommendSlice.actions
export const selectBannerList = (state: RootState) =>
  state[RECOMMEND_SLICE_NAME].bannerList
export const selectRecommendList = (state: RootState) =>
  state[RECOMMEND_SLICE_NAME].recommendList
export default recommendSlice.reducer
