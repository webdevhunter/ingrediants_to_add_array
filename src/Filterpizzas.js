import React from 'react';

class Filterpizzas extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        const pizzas=this.props.pizzas;
        const pizzareq=this.props.pizzareq;
        return(
            <div>
            <h1>ok this pizzas and pizzareq has to be filetered</h1>
            <p>{pizzas}{pizzareq}</p>
            </div>
        );
    }


}

export default Filterpizzas;