import React from "react";
function Greeting(){
    let Time = new Date();
    Time = Time.getHours();
    let cssStyle = {};
    let Greeting ="";
    if(Time<12){
        Greeting = `Good Morning`;
        cssStyle.color = "gold";
    }else if(Time<20  && Time>=12){
    Greeting = `Good Afternoon`;
    cssStyle.color = "orange";
   }else{
    Greeting = `Good Night`;
    cssStyle.color = "black";
   }

    return <div className="Greeting"><h1 ><span style={cssStyle}>{Greeting}</span></h1></div>
}

export default Greeting;