import React from 'react'

export type RequiredPick<T, Key extends keyof T> = Required<Pick<T, Key>>

export interface CommonProps {
  className?: string
  style?: React.CSSProperties
}

export enum SongType {
  DEFAULT = 0,
}
export interface Song {
  id: number
  type: SongType
  picUrl: string
  name: string
  playCount: number
  copywriter: string
}
