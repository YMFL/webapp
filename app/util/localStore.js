/*
 * Created by https://github.com/YMFL on 2017/5/10.
 */
export default {
    getItem:function (key) {
        try{
            //ios safari 无痕模式下，直接使用localStorage.setItem 会报错
             return localStorage.getItem(key);
        }catch(ex) {
            //开发环境提示 error
            // if(__DEV__){
                console.error('localStorage.getItem报错，',ex.message)
            // }
        }
    },
    setItem:function (key,value) {
        try {
            //ios safari 无痕模式下，直接使用localStorage.setItem 会报错
            localStorage.setItem(key,value)
        } catch (ex){
            // 开发环境提示 error
            // if(__DEV__){
                console.error('localStorage.getItem报错，',ex.message)
            // }
        }
    }
}