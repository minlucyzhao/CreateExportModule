var list = [];

module.exports = {
    storeInList: function(number) {
        list.push(number);
        console.log(list);
    },

    sortList: function() {
        list.sort(function(a,b) {
            return a - b;
        });
        console.log(list);
    }
}
