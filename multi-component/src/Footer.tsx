import { Component } from "react";
interface Istate{}
interface Iprops{}
class Footer extends Component <Iprops ,Istate>{
    private constructor(props:Iprops){
        super(props);
    };
    render(){
        return(
            <h5>Copyright@ Animesh.verma</h5>
        )
    }
};
export default Footer;