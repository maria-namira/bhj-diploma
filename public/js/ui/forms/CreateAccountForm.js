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
    Account.create(options.data, (err, response) => {
      if (err ) {
        console.warn(err);
        return;
    };
                
          this.element.reset();
          App.getModal('CreateAccount').close();
          App.update();
      });
    };
  };

