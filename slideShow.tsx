import React, { Component } from 'react'
import "../App.css";
interface Slides{
    title:string;
    text: string;
}
export interface IFormState {
disablePrev:boolean;
disableNext:boolean;
slides:Slides[];
index:number;
title:string;
text:string
}

export interface IFormProps {
slides:Slides[]
}
export default class slideShow extends React.Component<IFormProps,IFormState>  {
    constructor(props:IFormProps) { 
        super(props);
        this.state = {
           disablePrev:true,
           disableNext:false,
           slides:this.props.slides,
           index:0,
           title:'',
           text:''      
        }
    }
    componentDidMount(){
        this.setState({index:0})
    }
    buttonRestart=():any=>{
        this.setState({index:0,disablePrev:true})
    }
     buttonNext=(e:any):any=>{
         let currentIndex= this.state.index;
         if(currentIndex+1===this.state.slides.length-1){
            this.setState({title:this.state.slides[currentIndex+1].title, text:this.state.slides[currentIndex+1].text,index:currentIndex+1,disableNext:true,disablePrev:false})
         }
        this.setState({title:this.state.slides[currentIndex+1].title, text:this.state.slides[currentIndex+1].text,index:currentIndex+1,disablePrev:false})
    }
   
    buttonPrev=(e:any):any=>{
        let currentIndex= this.state.index;
        if(currentIndex===1){
            
            this.setState({title:this.state.slides[currentIndex-1].title, text:this.state.slides[currentIndex-1].text,index:currentIndex-1,disablePrev:true,disableNext:false})
         }
        this.setState({title:this.state.slides[currentIndex-1].title, text:this.state.slides[currentIndex-1].text,index:currentIndex-1,disableNext:false})
       
    }

    render() {
        const slides= this.state.slides
        return (
            <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined"  onClick={this.buttonRestart}   >Restart</button>
                <button data-testid="button-prev" className="small"  onClick={e=>this.buttonPrev(e)} disabled={this.state.disablePrev} >Prev</button>
                <button data-testid="button-next" className="small" onClick={e=>this.buttonNext(e)} disabled={this.state.disableNext}>Next</button>
            </div>
            <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[this.state.index].title}</h1>
        <p data-testid="text">{slides[this.state.index].text}</p>
            </div>
        </div>
        )
    }
}
