import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import CustomTable from './components/CustomTable';
import CustomForm from './components/CustomForm';
import Header from './components/Header';


class App extends Component {

  state = {
    authors: [
      {
        name: 'Paulo',
        book: 'React',
        price: '1000'
      },
      {
        name: 'Daniel',
        book: 'Java',
        price: '99'
      },
      {
        name: 'Marcos',
        book: 'Design',
        price: '150'
      },
      {
        name: 'Bruno',
        book: 'DevOps',
        price: '100'
      }
    ],
  };

  removeAuthor = index => {

    const { authors } = this.state;

    this.setState({
      authors: authors.filter((author, currentPosition) => {
        return currentPosition !== index;
      }),
    })

  };

  submitListener = author => {
    this.setState({ authors: [...this.state.authors, author] });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Bookstore</h1>
          <CustomTable authors={this.state.authors} removeAuthor={this.removeAuthor} />
          <CustomForm submitListener={this.submitListener} />
        </div>
      </Fragment>
    );
  }
}

export default App;
