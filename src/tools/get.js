import Vue from 'vue'
import router from '../router'
let v = new Vue()

export const axiosGet = function(url, formdata, success) {
    v.$axios.get(url, { params: formdata })
        .then(response => {
            if (response.data.code === 11) {
                router.push('/login')
            } else if (response.data.code === 0) {
                success(response.data.data)
            } else {
                v.$message.error(response.data.result)
            }
        })
        .catch(function(error) {
            if (error.message === 'Network Error') {
                v.$message.error('服务器维护，稍后再试！')
                router.push('/error')
            } else {
                // v.$message.error(error.response.status + '错误');
                console.log(error);
            }
        })
}
