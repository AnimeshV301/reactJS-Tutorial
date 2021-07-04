
import React, { Component } from 'react';
import Header from "./Head"
import Footer from "./Footer";
import Body from "./Body";
interface Istate{}
interface Iprops{}
class Main extends Component <Iprops ,Istate>{
   private constructor(props:Iprops){
       super(props);
   };
   render(){
       return(
           <React.Fragment>
               <Header />
               
               <Body/>
               
               <Footer />
           </React.Fragment>
       )
   }
};
export default Main;