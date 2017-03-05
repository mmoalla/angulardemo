'use strict'

app.service('itemProvider', ['$firebaseArray', function ($firebaseArray){
    var ref = firebase.database().ref('items');
    var items = $firebaseArray(ref);

    this.getItems = function(){   
        return items;
    }

    this.createItem = function(item){
        items.$add(item);
        window.location.href = "#!/items";
    }
}]);