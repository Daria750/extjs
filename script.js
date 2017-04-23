Ext.define('Classes.Person', {
    config: {
            name: 'Eugene',
            surname : 'Popov'
    },
    constructor: function(name, surname) {
        this.initConfig();
        if(name){
            this.setName(name);
        }
        if(surname){
            this.setSurname(surname);
        }
    },
    getinfo: function() {
        alert("Полное имя : " + this.getName() + " " + this.getSurname());
    },
});
Ext.define('Classes.Manager', {
    extend: 'Classes.Person',
    config: {
            department: 'sales'
    },
    constructor: function(name, surname, department) {
        this.initConfig();
        if(department){
            this.setDepartment(department);
        }
        // передаем параметры в конcтруктор родительского класса
        this.callParent([name, surname]);
    },
      getinfo: function() {
        this.callParent();
        alert("Департамент : " + this.department);
    }
  });