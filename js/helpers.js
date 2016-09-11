/**
 * Created by phpdev on 9/11/16.
 */

function O(obj) {
    if (typeof obj == 'object') return obj;
    else return document.getElementById(obj);
}