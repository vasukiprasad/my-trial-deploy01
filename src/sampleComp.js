import React from "react";

const SampleComp=()=>{
    const showTime=()=>{
        const _date=new Date();
        const currentDate=_date.getDate()+"/"+_date.getMonth()+"/"+_date.getFullYear()+" "+_date.getHours()+":"+_date.getMinutes();
        return currentDate;
    }
    return(
        <>
        <div>
            <h1>Sample Component</h1>
        </div>
        <div>
        <h3>Current Date Time : {showTime()}</h3>
        </div>
        </>
    );

}
export default SampleComp;