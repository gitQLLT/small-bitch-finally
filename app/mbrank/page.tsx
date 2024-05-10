import MbListBox from '../../components/ListBox/MbListBox'

const MbRank = ()=>{
  return <div className="mt-2.5">
    {
      Array.from({length: 7}, (_,i)=>i).map(item=>
        <MbListBox key={item} isRank={true}></MbListBox>
      )
    }
  </div>
}

export default MbRank