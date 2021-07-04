import React, { Component } from 'react';

interface Istate{
  "key1":Number,
  "key2":String,
  "key3":Boolean,
  "key4":any,
  "key5":any[]
};
interface Iprops{
   
}
class App extends Component <Iprops , Istate>{
  public constructor(props:Iprops){
    super(props);
    this.state ={
       key1 :1000,
       key2 :"Reactjs",
       key3 :true,
       key4:{"Sub_one":"ReactJS","Sun_two":"Mongo Db"},
       key5 :[
               {"emp_id":111,"emp_sal":10000,"emp_name":"e1"},
               {"emp_id":222,"emp_sal":10000,"emp_name":"e2"},
               {"emp_id":333,"emp_sal":10000,"emp_name":"e3"},
               {"emp_id":444,"emp_sal":10000,"emp_name":"e4"},
               {"emp_id":555,"emp_sal":10000,"emp_name":"e5"}
       ]

    };

  };
  render(){
    return(
      <React.Fragment>
        <table>
          <tr>
            <th>SNO</th>
            <th>Emp_Id</th>
            <th>Emp_Name</th>
            <th>Emp_Sal</th>
          </tr>
          {this.state.key5.map((element,index)=>(
               <tr key ={index}>
                <td>{index+1}</td>
                <td>{element.emp_id}</td>
                <td>{element.emp_name}</td>
                <td>{element.emp_sal}</td>
               </tr>
          )

          )}
        </table>
        <h1>{this.state.key1}</h1>
        <h1>{this.state.key2}</h1>
        <h1>{JSON.stringify(this.state.key3)}</h1>
        <h1>{JSON.stringify(this.state.key4)}</h1>
               </React.Fragment>
    )
  }
}
export default App;
