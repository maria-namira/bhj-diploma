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
    Account.create(data, (err, response) => {
      if (response && response.success) {
        App.getModal("createAccount").close();
        App.update();
        this.element.reset();
      };
    });
  };
};

