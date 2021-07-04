import {Component} from "react";
interface Istate{}
interface Iprops{}
class Header extends Component <Iprops ,Istate>{
    private constructor(props:Iprops) {
        super(props);
    }
    render(){
        return(
            <h1>Welcome to my website</h1>
        )
    }
};
export default Header;
