import Image from 'next/image'
import Link from 'next/link'

const Detail = (props:any)=>{
  console.log(props)
  return <>
    <div className="mt-2.5 box-wrap border-2 pb-2">
      <div className="recom-title text-black mb-2.5">recommand&nbsp;&gt;&nbsp;recommand&nbsp;&gt;&nbsp;recommand</div>
      <Image
        src="/images/14777.jpg"
        alt="Picture of the author"
        className="float-left ml-2.5 mr-2"
        width={120}
        height={150}
      />
      <div className="text-black">
        <Link href="#" className="text-lg font-medium">aaaa</Link>
        <div className="grid grid-cols-2 leading-6">
          <div>作者：xxx</div>
          <div>作者：xxx</div>
        </div>
        <div className="grid grid-cols-2 border-b leading-6">
          <div>作者：xxx</div>
          <div>作者：xxx</div>
        </div>
        <div className="grid grid-cols-2 my-2.5">
          <div className="btn-detail bg-sky-500">xxxx</div>
          <div className="btn-detail bg-orange-500">xxxx</div>
        </div>
        <div className="line-clamp-3">内容简介：然后，你可以在控制台中右键单击来自不同重新渲染的数组，并为它们选择“存储为全局变量”。
          假设第一个被保存为 temp1，第二个被保存为 temp2，然后你可以使用浏览器控制台检查两个数组中的每个依赖项是否相同：</div>
      </div>
      <div className="text-center">推荐：xxx，xxx，xxx</div>
    </div>
    <div className="box-wrap border-2 mt-2.5">
      <div className="rank-title leading-9 pl-2 border-b text-center">xxx</div>
      {
        Array.from({length: 50}, (_,i)=>i).map(item=>
          <div key={item} className="w-1/3 inline-block border-b border-dashed leading-9">
            <Link href="/content/1" className="link-active ml-2">aaaa</Link>
            <span>/xxx</span>
          </div>
        )
      }
    </div>
  </>
}

export default Detail