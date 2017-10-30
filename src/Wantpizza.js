import React, {Component} from 'react'
// import Filterpizzas from './Filterpizzas'
// import { Button, Grid, Input, Container} from 'semantic-ui-react'


class Wantpizza extends Component{
    constructor(props){
      super(props);
      this.handleSubmit=this.handleSubmit.bind(this);
      this.state={pizzareq:[]};
            
    }
      
    handleSubmit(event){
      event.preventDefault();
      var reqing=this.textinput.value;
      const reqpizzaing=this.props.pizzas.filter(function(pizza){
        return pizza===reqing;
      })
      // const notreqpizzaing=this.props.pizzas.filter(function(pizza){
      //   return pizza!==reqing
      // })
      console.log(reqpizzaing[0])
      this.setState({pizzareq:[...this.state.pizzareq,reqpizzaing[0]]})
      this.refs.form.reset();
    }

    render(){       
         return(
          <form onSubmit={this.handleSubmit} ref='form'>
          <div className="ui centered card">
             <div className="content">
             <img className="ui right floated tiny image" alt='pizza here' src="https://images.unsplash.com/photo-1453831210728-695502f9f795?w=834&ixid=dW5zcGxhc2guY29tOzs7Ozs" />
                <div className="header">
                   <h1>Pizza's App</h1>
                </div>
                
                <div className="description">
                    Search your required pizza here
                </div>

              {/* All pizzas arranged in list */}
              <div>{this.props.pizzas.map((ind)=>{return <li key={ind}>{ind}</li>})}</div>
              {/* div for ingrediants list */}
              <div className='ui divider'></div>
              <h4 className='ui header'>Added ingrediants list</h4>
              <div>{this.state.pizzareq.filter(function(obj){
                return obj!==undefined
              }).map((ind,index)=>{return <li key={index}>{ind}</li>})}</div>
              </div>
                            

              <div className="extra content">
                <div className='ui fluid left icon input focus'>
                <input type="text" placeholder='Filter'  ref={(input) => this.textinput = input} />
                <i className="search icon"></i>
                </div>
                
                <input type='submit' className='ui basic green fluid button' />
              </div>
        </div>
        </form>     
        );
    }

}

export default Wantpizza;