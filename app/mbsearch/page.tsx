import MbImgText from '../../components/ListBox/MbImgText'

const MbSearch = ()=>{
  return <div className="pb-2.5">
    <div className="recom-title h-10">recommand</div>
    {
      Array.from({length: 14}, (_,i)=>i).map(item=>
        <MbImgText key={item}></MbImgText>
      )
    }
  </div>
}

export default MbSearch