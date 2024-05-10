import Link from 'next/link'

const MbBookcase = ()=>{
  return <div className="pb-2.5">
    {
      Array.from({length: 4}, (_,i)=>i).map(item=>
        <div key={item} className="border rounded-sm bg-amber-50 p-2.5 mt-2.5 mx-2.5 overflow-hidden">
          <div className="float-left w-6 aspect-square leading-6 text-center rounded bg-orange-500 text-white">{item+1}</div>
          <div className="float-left ml-2">
            <Link href="/mbdetail/1" className="text-base">aaaa</Link>
            <div>分类：xxx</div>
            <div>作者：xxx</div>
            <div>已读到：
              <Link href="/mbdetail/1">第xxx章</Link>
            </div>
          </div>
          <div className="float-right w-12 h-7 leading-7 text-center border rounded-sm border-red-500 text-red-500">delete</div>
        </div>
      )
    }
  </div>
}

export default MbBookcase