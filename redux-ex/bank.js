const {createStore} = require ("redux")

const intialstae ={
    bal:10000
}
const reducer=(state=intialstae,action)=>{
    switch(action.type){
        case "Deposite":
            return{
            bal : state.bal + action.payload
            }
            case "Withdraw":
                return{
                    bal : state.bal - action.payload
                }
                default:
                    return state;
    }
}

const store =  createStore(reducer)
store.subscribe(()=>{
    console.log(store.getState())
});
store.dispatch({type:"Withdraw",payload:5000});
store.dispatch({type:"Deposite",payload:10000});
store.dispatch({type:"Withdraw",payload:5000});
store.dispatch({type:"Deposite",payload:10000});