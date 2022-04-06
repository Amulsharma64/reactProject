//import React from "react";

function calculator(){
        return <>
            <h1>Calculator</h1>
    <ol>
        <li>The sum of two numbers is = {Add(40,20)}</li>
        <li>The substraction of two numbers is = {Sub(40,20)}</li>
        <li>The Multiplication of two numbers is = {Multiplication(40,20)}</li>
        <li>The Division of two numbers is = {Division(40,20)}</li>
    </ol>
        </>
};

function Add(a,b){
    return a+b;
}

function Sub(a,b){
    return a-b;
}

function Multiplication(a,b){
    return a*b;
}

function Division(a,b){
    return (a/b).toFixed(2);
}


export default calculator;
export {Add,Sub,Division,Multiplication};

