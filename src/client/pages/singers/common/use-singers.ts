import { getSingerList } from '@/api'
import { useAppDispatch, useAppSelector } from '@/client/store'
import { useCallback, useEffect, useState } from 'react'
import {
  addSingersToSingerList,
  selectOffset,
  selectSingerList,
  selectStat,
  setOffset,
  setSingerList,
  setStat,
} from './slice'

export const useSingers = () => {
  const dispatch = useAppDispatch()
  const singerList = useAppSelector(selectSingerList)
  const pageOffset = useAppSelector(selectOffset)
  const stat = useAppSelector(selectStat)

  const [currentCategory, setCurrentCategory] = useState<undefined | string>(
    undefined,
  )
  const [currentAlpha, setCurrentAlpha] = useState<undefined | string>(
    undefined,
  )

  const reset = useCallback(() => {
    setCurrentAlpha(undefined)
    setCurrentCategory(undefined)
    dispatch(setOffset(0))
    dispatch(setSingerList([]))
  }, [dispatch])

  const clear = useCallback(() => {
    dispatch(setSingerList([]))
  }, [dispatch])

  const addSingers = useCallback(
    (offset: number) => {
      dispatch(setStat('loading'))
      getSingerList({
        offset,
        alpha: currentAlpha,
        category: currentCategory,
      })
        .then(list => {
          dispatch(addSingersToSingerList(list))
          dispatch(setOffset(offset))
          dispatch(setStat('success'))
        })
        .catch(e => dispatch(setStat('error')))
    },
    [currentAlpha, currentCategory, dispatch],
  )

  useEffect(() => {
    addSingers(0)
  }, [addSingers])

  return {
    isLoading: stat === 'loading',
    isError: stat === 'error',
    isIdle: stat === 'idle',
    currentCategory,
    currentAlpha,
    singerList,
    pageOffset,
    setCurrentCategory,
    setCurrentAlpha,
    reset,
    clear,
    addSingers,
  }
}
