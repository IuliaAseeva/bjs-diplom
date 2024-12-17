'use strict';

const userForm = new userForm();

userForm.loginFormCallback = (data) => {
    ApiConnector.login(data, check);

    function check(data) {
        if (!data.success) {
            return userForm.setLoginErrorMessage(data.error);
        } else {
            location.reload();
        }
    }
};

userForm.registrFormCallback = (data) => {
    ApiConnector.register(data, newUser);

    function newUser(data) {
        if (!data.success) {
            return userForm.setRegistrErrorMessage(data.error);
        } else {
            location.reload();
        }
    }
};