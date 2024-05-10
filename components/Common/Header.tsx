import Link from 'next/link'
import { Search } from 'lucide-react';

const Header = ()=>{
  return <>
    <div className="flex justify-between items-center h-16 my-2.5">
      <Link href="/">XIAOHEBOOK</Link>
      <div className="flex items-center">
        <input type="text" placeholder="search..." className="w-80 h-10 pl-2 border" />
        <Link href="/search" className="border h-10 flex items-center px-3">
          <Search color="gray" />
        </Link>
      </div>
      <Link href="/bookcase" className="px-2 py-1 text-blue-900 border">read</Link>
    </div>
    <ul className="back-primary py-1 flex justify-around">
      {
        Array.from({length: 8}, (_,i)=>i).map((item,index)=>
          <li key={item} className="leading-9">
            <Link href={index===7?'/rank':`/category/${index}`} className="block px-4 text-white">xuanh</Link>
          </li>
        )
      }
    </ul>
  </>
}

export default Header