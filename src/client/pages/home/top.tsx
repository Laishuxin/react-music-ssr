import React from 'react'

function Top() {
  return (
    <div className='top flex flex-row justify-between bg-current py-1 px-2'>
      <span className='cursor-pointer leading-10 text-white iconfont menu'>
        &#xe65c;
      </span>
      <span className='leading-10 text-white title'>React Music</span>
      <span className='cursor-pointer leading-10 text-white iconfont search'>
        &#xe62b;
      </span>
    </div>
  )
}

export default React.memo(Top)
