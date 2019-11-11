import Vue from 'vue'
import router from '../router'
let v = new Vue()

export const axiosPost = function(url, formdata, text, header, success) {
    v.$axios.post(url, formdata, header)
        .then(response => {
            if (response.data.code === 11) {
                router.push('/login')
            } else if (response.data.code === 0) {
                v.$message({
                    showClose: true,
                    message: text,
                    type: 'success'
                })
                success(response.data.data)
            } else {
                v.$message.error(response.data.result)
            }
        })
        .catch(function(error) {
            if (error.message === 'Network Error') {
                v.$message.error('服务器维护，稍后再试！')
            } else {
                // v.$message.error(error.response.status + '错误')
                v.$message.error(error);
            }
        })
}