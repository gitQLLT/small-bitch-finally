import Link from 'next/link'

const AuthText = ({showDate}: {showDate?:Boolean})=>{
  return  <div className="flex justify-between mx-2 leading-8 border-b last:border-b-0">
    <div>
      <span>[xxx]</span>
      <Link href="#" className="link-active ml-1">aaaa</Link>
      {showDate && 
      <Link href="#" className="link-active ml-2">xxx</Link>}
    </div>
    <div>
      <span>xxx</span>
      {showDate && <span className="ml-1">xxx</span>}
    </div>
  </div>
}

export default AuthText