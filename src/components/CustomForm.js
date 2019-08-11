import React, {Component} from 'react';


class CustomForm extends Component {

    constructor(props) {
        super(props);

        this.stateInicial = {
            name: '',
            book: '',
            price: ''
        };

        this.state = this.stateInicial;
    }

    submitForm = () => {
        this.props.submitListener(this.state);
        this.setState(this.stateInicial);

    };


    inputListener = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    };


    render() {
        const {name, book, price} = this.state;
        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="name">Name</label>
                        <input
                            className="validate"
                            id="name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.inputListener}/>
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="book">Book</label>
                        <input
                            className="validate"
                            id="book"
                            type="text"
                            name="book"
                            value={book}
                            onChange={this.inputListener}/>

                    </div>
                    <div className="input-field col s4">
                        <label className="input-field col s4" htmlFor="price">Price</label>
                        <input
                            className="validate"
                            id="price"
                            type="text"
                            name="price"
                            value={price}
                            onChange={this.inputListener}/>
                    </div>
                </div>

                <button onClick={this.submitForm} className="btn waves-effect waves-light indigo lighten-2"
                        type="button">Save
                </button>
            </form>
        );
    }
}

export default CustomForm
