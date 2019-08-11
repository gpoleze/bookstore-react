import React, { Component } from 'react';


const TableHead = () => {
    return(
        <thead>
          <tr>
            <th>Author</th>
            <th>Book</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
    );
};

const TableBody = props =>{
    
    const lines = props.authors.map((line, index)=>{
       return( 
       <tr key={index}>
            <td>{line.name}</td>
            <td>{line.book}</td>
            <td>{line.price}</td>
            <td><button onClick={ () => props.removeAuthor(index)} className="waves-effect waves-light indigo lighten-2 btn">Remove</button></td>
        </tr>
       );
    });

    return(
        <tbody>
          {lines}
        </tbody>
    );
};


class CustomTable extends Component{
    

    render(){
        const { authors, removeAuthor } = this.props;
        
        return(
        <table className="centered highlight">
        <TableHead />
        <TableBody authors={authors} removeAuthor = { removeAuthor }/>
        </table>
        );
    }

}
export default CustomTable;
