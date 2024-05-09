import ImgText from '../../../components/ListBox/ImgText'

const Category = ()=>{
  return<div className="grid grid-cols-3 mt-2.5 box-wrap border-2">
    {
      Array.from({length: 15}, (_,i)=>i).map(item=>
        <ImgText key={item}></ImgText>
      )
    }
  </div>
}

export default Category