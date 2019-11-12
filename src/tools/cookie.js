let cookie = {
    getAll: function () {
        var arr = document.cookie.split('; ');
        var obj = {};
        for (var i = 0; i < arr.length; i++) {
            obj[arr[i].split('=')[0]] = arr[i].split('=')[1];
        }
        return obj;
    },
    get: function (key) {
        return this.getAll()[key];
    },
    set: function (key, value, time) {
        var date = new Date().getTime() + time * 3600000;
        if (window.location.protocol === 'https') {
            document.cookie = key + '=' + value + ';expires=' + new Date(date).toUTCString() + ';domain=grasstech.cn;path=/'
        } else {
            document.cookie = key + '=' + value + ';expires=' + new Date(date).toUTCString()
        }
    },
    remove: function (key) {
        var date = new Date().getTime() - 1;
        if (window.location.protocol === 'https') {
            document.cookie = key + '=;expires=' + new Date(date).toUTCString() + ';domain=grasstech.cn;path=/'
        } else {
            document.cookie = key + '=;expires=' + new Date(date).toUTCString()
        }
    }
};
export default cookie;
