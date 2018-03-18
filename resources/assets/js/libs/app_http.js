import axios from 'axios'
import {apiUrl} from '@/config/app'

export const http = axios.create({
    baseURL : apiUrl,
    validateStatus: function(status) {
        return [200, 201, 204, 422, 401, 400, 404, 429, 403].indexOf(status) !== -1 // 默认的
    },
})

http.interceptors.response.use(
    response => {
        /**
         * code为非20000是抛错 可结合自己业务进行修改
         */
        const status = response.status
        const res = response.data
        if ([200, 201, 204].indexOf(status) !== -1) {
            return response.data
        }
        if ([422].indexOf(status) !== -1) {
            return Promise.reject(res)
        }
        if ([400, 404, 429, 403].indexOf(status) !== -1) {
            this.$Notice.error({
                title: 'error',
                desc: res.message,
            });
            return Promise.reject(res.message)
        }
        if ([401].indexOf(status) !== -1) {
            this.$router.push('/login')
        }

    },
    error => {

        this.$Notice.error({
            title: 'server error',
            desc: 'false'
        });

        return Promise.reject(error)
    }
)

export default function install(Vue) {
    Object.defineProperty(Vue.prototype, '$http', {
        get() {
            return http
        },
    })
}