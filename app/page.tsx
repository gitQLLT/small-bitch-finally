import PcIndex from '../components/Index'
import MbIndex from '../components/Index/MbIndex'

const Index = () => {
  return <>
    <div className="hidden sm:block">
      <PcIndex></PcIndex>
    </div>
    <div className="block sm:hidden">
      <MbIndex></MbIndex>
    </div>
  </>
};

export default Index;