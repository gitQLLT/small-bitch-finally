import RankBox from '../../components/ListBox/RankBox'

const Rank = ()=>{
  return <>
    {
      Array.from({length: 5}, (_,i)=>i).map(item=>
        <RankBox key={item}></RankBox>
      )
    }
  </>
}

export default Rank