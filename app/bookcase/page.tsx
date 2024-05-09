import Link from 'next/link'

const BookCase = ()=>{
  return <div className="mt-2.5 box-wrap border-2 pb-2.5">
    <div className="recom-title text-black">recommand</div>
    <div className="grid grid-cols-2">
    {
      Array.from({length: 8}, (_,i)=>i).map(item=>
        <div key={item} className="border rounded-md p-2.5 mt-2.5 mx-2.5">
          <div className="float-left w-6 aspect-square leading-6 text-center rounded bg-orange-500 text-white">{item+1}</div>
          <div className="float-left ml-2">
            <Link href="#" className="link-active">aaaa</Link>
            <div>分类：xxx</div>
            <div>作者：xxx</div>
            <div>已读到：
              <Link href="#" className="link-active">第xxx章</Link>
            </div>
          </div>
          <div className="float-right w-12 h-7 leading-7 text-center border rounded-sm border-red-500 text-red-500">delete</div>
        </div>
      )
    }
  </div>
  </div>
}

export default BookCase