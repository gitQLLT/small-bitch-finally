import Link from 'next/link'

const PureText = ()=>{
  return <div className="mx-2 leading-8 border-b last:border-b-0">
    <span>[xxx]</span>
    <Link href="#" className="link-active ml-1">aaaa</Link>
  </div>
}

export default PureText