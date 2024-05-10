import { Search } from 'lucide-react';
import Link from 'next/link'

const MbFooter = ()=>{
  return <>
    <div className="flex items-center justify-center my-2.5">
      <input type="text" placeholder="search..." className="w-80 h-10 pl-2 border" />
      <Link href="/search" className="border h-10 flex items-center px-3">
        <Search color="gray" />
      </Link>
    </div>
    <div className="text-center">底部</div>
  </>
}

export default MbFooter