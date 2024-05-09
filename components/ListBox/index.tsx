import Link from 'next/link'
import Image from 'next/image'

const ListBox = ()=>{
  return <div className="border-r last:border-r-0 border-sky-200 border-dashed">
    <div className="recom-title">recommand</div>
    {
      Array.from({length: 9}, (_,i)=>i).map((item,index)=>
        {
          return index===0 ? 
          <div key={item} className="flex pl-2 pt-2">
            <Image
              src="/images/14777.jpg"
              alt="Picture of the author"
              width={67}
              height={82}
            />
            <div className="ml-2">
              <div className="mb-1">
                <Link href="#" className="link-active font-bold">aaaa</Link>
              </div>
              <div className="line-clamp-3">然后，你可以在控制台中右键单击来自不同重新渲染的数组，并为它们选择“存储为全局变量”。
                假设第一个被保存为 temp1，第二个被保存为 temp2，然后你可以使用浏览器控制台检查两个数组中的每个依赖项是否相同：</div>
            </div>
          </div> 
          :
          <div key={item} className="flex justify-between mx-2 leading-8 border-b last:border-b-0">
            <div>
              <span>[xxx]</span>
              <Link href="#" className="link-active ml-1">aaaa</Link>
            </div>
            <div>xxx</div>
          </div>
        }
      )
    }
  </div>
}

export default ListBox