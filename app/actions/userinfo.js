/*
 * Created by https://github.com/YMFL on 2017/5/11.
 */
import * as actionTypes from '../constants/userinfo'
export  function update(data) {
    return {
        type:actionTypes.USERINFO_UPDATE,
        data
    }
}