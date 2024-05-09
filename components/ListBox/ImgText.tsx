import Image from 'next/image'
import Link from 'next/link'

const ImgText = ()=>{
  return <div className="px-1 py-2">
    <Image
      src="/images/14777.jpg"
      alt="Picture of the author"
      className="float-left mr-2"
      width={120}
      height={150}
    />
    <div>
      <div className="flex justify-between border-b border-dashed mb-1">
        <Link href="/detail/1" className="link-active font-bold">aaaa</Link>
        <span>bbb</span>
      </div>
      <div className="line-clamp-6 indent-2">然后，你可以在控制台中右键单击来自不同重新渲染的数组，并为它们选择“存储为全局变量”。
        假设第一个被保存为 temp1，第二个被保存为 temp2，然后你可以使用浏览器控制台检查两个数组中的每个依赖项是否相同：</div>
    </div>
  </div>
}

export default ImgText