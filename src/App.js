import React , { Fragment }from "react";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { 
  //     age : 20
  //    }
  // }

  // uphandling = ()=> {
  //   this.setState({
  //     ...this.state,
  //     age: ++this.state.age
  //   })
  // }
  // downhandling = () => {
  //   this.setState({
  //     ...this.state,
  //     age: --this.state.age
  //   })
  // }
  deleteList=(id)=>{
    console.log("hi list is clicked",{id});
  }
 
  render() { 
    return ( 
      <Fragment>
         <Typography variant="h1">
          Age {this.props.age}
        </Typography>
        <ButtonGroup>
          <Button onClick={this.props.uphandling} color="primary">Age-Up</Button>
          <Button onClick={this.props.downhandling} color="secondary">Age-Down</Button>
        </ButtonGroup> 
        <Typography variant="h6">History
        {/* <Button color="primary">{this.props.history}</Button> */}
        <ul>
        {
          this.props.history.map(value =>(
            <li onClick={()=>this.deleteList(value.id)} key={value.id}>{"hi",value.age}</li>
          ))
        }
        </ul>
        </Typography>
      </Fragment>
     );
  }
}

//mapping state
const mapStateToProps = (initState) => {
  return{
    age : initState.age,
    history : initState.history
  }
}

//action
const mapDispatchToProps = (dispatch) => {
  return {
    uphandling: ()=> dispatch ({type: "Age-Up"}),
    downhandling: ()=> dispatch ({type: "Age-Down"}),
    deleteList: (id)=> dispatch({type: "Delete-List",key:id})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);