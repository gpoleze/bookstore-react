import validator from 'validator';

class FormValidator {

    constructor(validation) {
        this.validation = validation;
    }


    valid(state) {

        const field = state[this.validation.field.toString()];
        const method = validator[this.validation.method];

        if (method(field, [], state)) {
            console.log('Form is not valid');
            return false;
        }

        console.log('Form is valid');
        return true;
    }
}

export default FormValidator;
