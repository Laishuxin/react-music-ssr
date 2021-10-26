import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Switch } from 'react-router-dom'
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'
import { Context } from 'types/index'
import Header from './components/common/header'
import Footer from './components/common/footer'
import { setStyle } from './shared/utils'
import style from './index.css'

interface AppProps extends RouteConfigComponentProps {}
const App = (props: AppProps) => {
  const { staticContext, route } = props
  setStyle(staticContext as Context, App.name, style)
  return (
    <Fragment>
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

      <Header />
      <main>
        <Switch>{renderRoutes(route?.routes)}</Switch>
      </main>
      <Footer />
    </Fragment>
  )
}

export default App
