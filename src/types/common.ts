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
