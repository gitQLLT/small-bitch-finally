import Link from 'next/link'
import MbImgText from '../ListBox/MbImgText'
import MbListBox from '../ListBox/MbListBox'
import { Search } from 'lucide-react';

const MbIndex = ()=>{
  return <>
    <div className="grid grid-cols-5 text-base bg-gray-100 border-b-4">
      {
        Array.from({length: 10}, (_,i)=>i).map(item=>
          <div key={item} className="flex justify-center items-center px-2 py-1.5">
            <Link href={item===9 ? `/mbrank` : `/mbcategory/${item}`}>aaaa</Link>
          </div>
        )
      }
    </div>
    <div className="flex items-center justify-center my-2.5">
      <input type="text" placeholder="search..." className="w-80 h-10 pl-2 border" />
      <Link href="/mbsearch" className="border h-10 flex items-center px-3">
        <Search color="gray" />
      </Link>
    </div>
    {
      Array.from({length: 4}, (_,i)=>i).map(item=>
        <MbImgText key={item}></MbImgText>
      )
    }
    {
      Array.from({length: 7}, (_,i)=>i).map(item=>
        <MbListBox key={item}></MbListBox>
      )
    }
  </>
}

export default MbIndex