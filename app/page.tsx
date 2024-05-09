import ImgText from '../components/ListBox/ImgText'
import PureText from '../components/ListBox/PureText'
import AuthText from '../components/ListBox/AuthText'
import ListBox from '../components/ListBox'

const Index = () => {
  return <>
    <div className="grid grid-cols-3 gap-4 mt-2.5">
      <div className="col-span-2 box-wrap border-2">
        <div className="grid grid-cols-2">
          {
            Array.from({length: 4}, (_,i)=>i).map(item=>
              <ImgText key={item}></ImgText>
            )
          }
        </div>
      </div>
      <div className="box-wrap border-2">
        <div className="recom-title">recommand</div>
        {
          Array.from({length: 9}, (_,i)=>i).map(item=>
            <PureText key={item}></PureText>
          )
        }
      </div>
    </div>
    <div className="grid grid-cols-3 mt-2.5 box-wrap border-2">
      {
        Array.from({length: 3}, (_,i)=>i).map(item=>
          <ListBox key={item}></ListBox>
        )
      }
    </div>
    <div className="grid grid-cols-3 mt-2.5 box-wrap border-2">
      {
        Array.from({length: 3}, (_,i)=>i).map(item=>
          <ListBox key={item}></ListBox>
        )
      }
    </div>
    <div className="grid grid-cols-3 gap-4 mt-2.5">
      <div className="col-span-2 box-wrap border-2">
        <div className="recom-title">recommand</div>
        {
          Array.from({length: 9}, (_,i)=>i).map(item=>
            <AuthText key={item} showDate={true}></AuthText>
          )
        }
      </div>
      <div className="box-wrap border-2">
        <div className="recom-title">recommand</div>
        {
          Array.from({length: 9}, (_,i)=>i).map(item=>
            <AuthText key={item}></AuthText>
          )
        }
      </div>
    </div>
  </>
};

export default Index;