import React from 'react'
import "./Chart.css"
import Chartbar from "./Chartbar"

const Chart = (props) => {
const dataSetValues= props.dataSets.map(dataSet=>dataSet.value)
const max=Math.max(...dataSetValues);
// console.log(props.dataSets)
// console.log(max)
  return (
    <div className='chart'>
      {props.dataSets.map((data)=><Chartbar value={data.value} label={data.label}  key={data.label} maxValue={max} />)}
    </div>
  )
}

export default Chart