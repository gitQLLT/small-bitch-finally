import Link from 'next/link'

const AuthText = ({showDate, showLast, isRank, idx}: {showDate?:Boolean, showLast?:Boolean, isRank?:Boolean, idx:number})=>{
  return <div className={`flex justify-between mx-2 leading-8 border-b ${showLast ? 'last:border-b' : 'last:border-b-0'}`}>
    <div>
      {isRank ? 
        <span className={`inline-block w-5 h-5 leading-5 mr-1 text-center text-white bg-gray-400 rounded-full ${idx<3 && 'bg-red-400'}`}>{`${idx+1}`}</span> : 
          <span>[xxx]</span>
      }
      <Link href="#" className="link-active ml-1">aaaa</Link>
      {
        showDate && <Link href="#" className="link-active ml-2">xxx</Link>
      }
    </div>
    <div>
      <span>xxx</span>
      {
        showDate && <span className="ml-1">xxx</span>
      }
    </div>
  </div>
}

export default AuthText