import React, {Component} from "react";
import axios from "axios"
import { TableRow,TableCell,TableBody,Paper,TableHead,Table,TableContainer,Avatar } from "@material-ui/core";
interface Iprops{}
interface Istate{
  data:any
}
class App extends Component<Iprops,Istate>{
  public constructor(props:Iprops){
    super(props)
    this.state={
      data:[]
    }
    
  }
  componentDidMount(){
    axios.get("http://restcountries.eu/rest/v2/all").then((posres)=>{
        this.setState({
          data:posres.data,
        })
    },(erres)=>{
      console.log(erres)
    })
  }
  render(){
    return(
      <React.Fragment>
        <TableContainer component ={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Sr No</TableCell>
                  <TableCell>Country Name</TableCell>
                  <TableCell>Capital</TableCell>
                  <TableCell>Region</TableCell>
                  <TableCell>Population</TableCell>
                  <TableCell>Area</TableCell>
                  <TableCell>Currency</TableCell>
                  <TableCell>Language</TableCell>
                  <TableCell>Flag</TableCell>
                  
                   
                </TableRow>
              </TableHead>
              <TableBody>
                    {this.state.data.map((element:any,index:any)=>(
                        <TableRow>
                          <TableCell>{index+1}</TableCell>
                          <TableCell>{element.name}</TableCell>
                          <TableCell>{element.capital}</TableCell>
                          <TableCell>{element.region}</TableCell>
                          <TableCell>{element.population}</TableCell>
                          <TableCell>{element.area}</TableCell>
                          <TableCell>{element.currencies[0].symbol}</TableCell>
                          <TableCell>{element.languages[0].name}</TableCell>
                          <TableCell><Avatar src={element.flag} ></Avatar></TableCell>
                        </TableRow>
                    ))}
              </TableBody>
            </Table>
        </TableContainer>
      </React.Fragment>
    )
  }
}
export default App;