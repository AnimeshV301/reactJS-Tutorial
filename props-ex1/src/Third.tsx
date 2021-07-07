import { Paper, TableContainer , Table ,TableHead ,TableRow,TableCell,TableBody,Avatar, Typography} from "@material-ui/core";
import React, { Component } from "react";
interface Istate{}
interface Iprops{
    key1:String,
    key2:Number,
    key3:any[],
    key4:any
   
};
class Third extends Component<Iprops,Istate>{
    public constructor(props:Iprops){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                <Typography  variant="h2" color ="primary">{this.props.key1}</Typography>
             <TableContainer component ={Paper}  style ={{width:'50%'}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                              <TableCell>Sr No</TableCell>
                              <TableCell>Name</TableCell>
                              <TableCell>Movie</TableCell>
                              <TableCell>Image</TableCell>
                           
                            </TableRow>
                        </TableHead>
                        <TableBody>
                          {this.props.key3.map((element,index)=>(
                              <TableRow key ={index}>
                                  <TableCell>{index+1}</TableCell>
                                  <TableCell>{element.Name}</TableCell>
                                  <TableCell>{element.Movie}</TableCell>
                                  <TableCell><Avatar src ={element.image}></Avatar></TableCell>
                              </TableRow>
                          ))}
                        </TableBody>
                    </Table>
             </TableContainer>
            </React.Fragment>
        )
    }
}export default Third;