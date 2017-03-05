'use strict'

app.service('categoriesProvider', ['$firebaseArray', '$firebaseObject', function ($firebaseArray, $firebaseObject, $location, $routeParams){
    var ref = firebase.database().ref('categories');
    var categories = $firebaseArray(ref);

    this.getCategories = function(){
        return  categories;
    }

    this.createCategory = function(category){
        categories.$add(category);
        window.location.href = "#!/categories";
    }

    this.updateCategory = function(category){
        var child = ref.child('categories');
        var syncObject = $firebaseObject(child);
        syncObject.$loaded().then(function() {
            return syncObject.$save();
        }).then(function() {
            window.location.href = "#!/categories";
        });
    }
}]);