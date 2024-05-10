import Image from 'next/image'
import Link from 'next/link'

const MbDetail = ()=>{
  return <>
    <div className="p-2.5">
      <Image
        src="/images/14777.jpg"
        alt="Picture of the author"
        className="float-left mr-2"
        width={80}
        height={100}
      />
      <div>
        <div className="text-base mb-2.5">xxx</div>
        <div className="grid grid-cols-2 mb-1">
          <span>bbb</span>
          <span>bbb</span>
        </div>
        <div className="grid grid-cols-2 mb-1">
          <span>bbb</span>
          <span>bbb</span>
        </div>
        <div className="grid grid-cols-2 mb-1">
          <span>bbb</span>
          <span>bbb</span>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 pb-2.5">
      <div className="btn-detail bg-sky-500">xxxx</div>
      <div className="btn-detail bg-orange-500">xxxx</div>
    </div>
    <div>
      <div className="h-10 leading-10 bg-cyan-500 text-white px-2.5">xxx</div>
      <div className="px-2.5 my-2.5 leading-6 line-clamp-3 indent-2">然后，你可以在控制台中右键单击来自不同重新渲染的数组，并为它们选择“存储为全局变量”。
          假设第一个被保存为 temp1，第二个被保存为 temp2，然后你可以使用浏览器控制台检查两个数组中的每个依赖项是否相同：</div>
    </div>
    <div>
      <div className="h-10 leading-10 bg-cyan-500 text-white px-2.5">xxx</div>
      {
        Array.from({length: 9}, (_,i)=>i).map(item=>
          <div key={item} className="h-10 leading-10 border-b pl-2.5">
            <span className="mr-2">xxx</span>
            <Link href="/mbcontent/1">aaaa</Link>
          </div>
        )
      }
      <div className="h-9 leading-9 text-center bg-sky-500 mx-2.5 text-white mt-2.5">more&gt;&gt;</div>
    </div>
  </>
}

export default MbDetail