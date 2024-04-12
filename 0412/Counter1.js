import React, {Component} from 'react';

class Counter extends Component{
constructor(props){
    super(props);
    this.state = {
        count: 0
    };
}
 render(){
const {count} = this.state;
return(
    <div>
        <h2>
        현재 세어진 수: {count}
        </h2>
        <button onClick={()=> {this.setState({count: count+ 1})}}>
        count 더하기 1 
        </button>

        <button onClick={()=> {this.setState({count: count- 1})}}>
        count 빼기 1 
        </button>

        <button onDoubleClick={()=> {this.setState({count: count*2})}}>
        count 곱하기 2 
        </button>

        <button onDoubleClick={()=> {this.setState({count: count/2})}}>
        count 나누기 2
        </button>


        
    </div> 
    );
 }
    

}
export default Counter;
