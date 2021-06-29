/**
 * Класс CreateAccountForm управляет формой
 * создания нового счёта
 * */
'use strict';

class CreateAccountForm extends AsyncForm {
 /**
     * Создаёт счёт с помощью Account.create и закрывает
     * окно в случае успеха, а также вызывает App.update()
     * и сбрасывает форму
     * */
  onSubmit( options) {
    Entity.create('/account', options, response) => {
      if (response && response.success ) {
        super.resetFormData();
        App.getModal('CreateAccount').close();
        App.getForm('createIncome').renderAccountsList();
        App.getForm('createExpense').renderAccountsList();
        App.update();
      };
    };
  };
};

