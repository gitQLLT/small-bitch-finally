import Image from 'next/image'
import Link from 'next/link'

const Search = ()=>{
  return <div className="mt-2.5 box-wrap border-2 pb-2.5">
    <div className="recom-title text-black">recommand</div>
    <div className="grid grid-cols-2">
    {
      Array.from({length: 8}, (_,i)=>i).map(item=>
        <div key={item} className="border rounded-md p-2.5 mt-2.5 mx-2.5">
          <Image
            src="/images/14777.jpg"
            alt="Picture of the author"
            className="float-left mr-2"
            width={80}
            height={100}
          />
          <div>
            <Link href="#" className="link-active font-bold">aaaa</Link>
            <div>作者：xxx</div>
            <div className="line-clamp-3">然后，你可以在控制台中右键单击来自不同重新渲染的数组，并为它们选择“存储为全局变量”。
              假设第一个被保存为 temp1，第二个被保存为 temp2，然后你可以使用浏览器控制台检查两个数组中的每个依赖项是否相同：</div>
          </div>
        </div>
      )
    }
  </div>
  </div>
}

export default Search