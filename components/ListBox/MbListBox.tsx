import AuthText from '../ListBox/AuthText'

const MbListBox = ({isRank}: {isRank?:Boolean})=>{
  return <div className="mb-4">
    <div className="recom-title">recommand</div>
      {
        Array.from({length: 9}, (_,i)=>i).map(item=>
          <AuthText key={item} showLast={true} isRank={isRank} idx={item}></AuthText>
        )
      }
  </div>
}

export default MbListBox