import React, { useState } from 'react';
import data from './data';
import './style.css'
export default function Accordian()
{
    function handleSingleSelection(getCurrentId)
{
    setSelected(getCurrentId === selected ? null :getCurrentId);
}
function handleMultipleSelection(getCurrentId)
{
    let cpyMultiple = [...multiple];
    const findIndexofCurrentId = cpyMultiple.indexOf(getCurrentId);
    if(findIndexofCurrentId === -1)
        cpyMultiple.push(getCurrentId)
    else cpyMultiple.splice(findIndexofCurrentId,1)
    setMultiple(cpyMultiple);
}
    const [selected,setSelected] = useState(null);
    const [enableMultiSelection , setEnableMultiSelection] = useState(false);
    const [multiple , setMultiple] = useState([]);
    return ( <div className="wrapper">
        <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>Enable Multiple Selection</button>
            <div className="accordian">
                {
                data && data.length > 0? (data.map((dataItem) =>(<div className="item">
                    <div className="title" onClick={enableMultiSelection ? ()=>handleMultipleSelection(dataItem.id) : ()=> handleSingleSelection(dataItem.id) }>
                        <h3>{dataItem.title}</h3>
                        <span>+</span>
                        </div> 
                        {
                            selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? <div className='content'>{dataItem.content}</div>:null
                        }
                        </div>
       ) )):(<div>Data not found</div>)
              }
              </div>
              </div> 
    ) ;
           
}