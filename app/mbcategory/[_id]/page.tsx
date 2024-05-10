import MbImgText from '../../../components/ListBox/MbImgText'

const MbCategory = ()=>{
  return <div className="pb-2.5">
    {
      Array.from({length: 14}, (_,i)=>i).map(item=>
        <MbImgText key={item}></MbImgText>
      )
    }
  </div>
}

export default MbCategory