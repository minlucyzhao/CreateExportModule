var list = [];

var obj = {
storeInList: function(number) {
    list.push(number);
    console.log(list);
    }
}

obj.storeInList(400000);
obj.storeInList(23482734);



var list = [2,100,6,8];

var obj = {
    sortList: function(list) {
        list.sort(function(a,b) {
            return a - b;
        });
    console.log(list);
    }
}

obj.sortList(list);