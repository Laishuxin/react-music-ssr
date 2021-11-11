import React from 'react'
import { Helmet } from 'react-helmet'
import { Switch } from 'react-router-dom'
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'
import { Context } from 'types/index'
import { setStyle } from './shared/utils'
import resetCss from '@/assets/style/reset.css'
import fontCss from '@/assets/iconfont/iconfont.css'
import mainCss from '@/assets/style/main.css'
import Home from './pages/home'

interface AppProps extends RouteConfigComponentProps {}
const App = (props: AppProps) => {
  const { staticContext, route } = props
  setStyle(staticContext as Context, 'reset-css', resetCss)
  setStyle(staticContext as Context, 'font-css', fontCss)
  setStyle(staticContext as Context, 'main-css', mainCss)
  return (
    <div className='app'>
      <Helmet>
        <title>react music - 音乐伴你行</title>
        <meta charSet='utf-8' />
        <meta name='description' content='音乐伴你行' />
        <meta
          name='keywords'
          content='音乐,React音乐,在线听歌,音乐下载,音乐播放器,音乐网站,MV,巅峰榜,音乐排行榜,翻译歌曲,热门歌曲,经典老歌'
        ></meta>
        <meta
          name='description'
          content='海量音乐在线试听、最流行音乐在线首发、歌词翻译、手机铃声下载、高品质音乐试听、正版音乐下载、免费空间背景音乐设置、MV观看等，是互联网音乐播放和下载的首选'
        ></meta>
      </Helmet>

      <Home {...props} />
    </div>
  )
}

export default App
