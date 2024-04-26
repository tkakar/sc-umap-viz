import './ScatterPlotWrapper.css';
import {useState, useEffect} from "react"

import {ParentSize}  from '@visx/responsive';
import ScatterPlot from './ScatterPlot';

function ScatterPlotWrapper() {
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(false);

  function setErrorState(value){
    setErrorMessage(value)

  }
    useEffect(() => {
      async function getData(){
        try {
          const resp  = await fetch('./data/umap_coor.json')
          const umapData = await resp.json()
          setData(umapData)
        }
        catch (error) {
          setErrorState(true)
        }
      }
        getData()
    }, []);

  return (
    <>
      <div className='chart-container'>
        {data &&   <ParentSize>{({ width, height }) => <ScatterPlot data={data} width={width} height={height} />}</ParentSize>}
        {errorMessage && <h4 className="error-message">Error occurred while reading file</h4>} 
      </div>  
    </>
  );
}

export default ScatterPlotWrapper;

