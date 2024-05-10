"use client"
import { usePathname, useRouter } from 'next/navigation'
import {CircleChevronLeft, Home, User} from 'lucide-react'

const MbHeader = ()=>{
  const pathname = usePathname()
  const router = useRouter()
  return <div className="flex justify-between items-center h-11 px-2 bg-cyan-500 text-base text-white">
    {pathname==='/' ? <span /> : <CircleChevronLeft onClick={()=>window.history.go(-1)} />}
    <div>小何尖尖</div>
    {pathname==='/' ? <User onClick={()=>router.push('/mbbookcase')} /> : <Home onClick={()=>router.push('/')} />}
  </div>
}

export default MbHeader