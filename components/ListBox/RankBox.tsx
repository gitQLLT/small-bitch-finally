import Link from 'next/link'

const RankBox = ()=>{
  return <div className="mt-2.5">
    <div className="rank-title leading-9 pl-2 border-b">xxx</div>
    {
      Array.from({length: 50}, (_,i)=>i).map(item=>
        <div key={item} className="w-1/5 inline-block border-b border-dashed leading-7">
          <Link href="#" className="link-active ml-2">aaaa</Link>
          <span>/xxx</span>
        </div>
      )
    }
  </div>
}

export default RankBox