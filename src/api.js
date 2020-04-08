import $ from 'jquery';
import store from '@/store/store';

let apiUrl = 'https://api.17miljoenmondkapjes.nl/api';

const getHeaders = function() {
    return {
        'Accept': 'application/json'
    };
};

const register = function (sewer) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'POST',
            url : apiUrl + '/register',
            data: sewer,
            headers: getHeaders(),
        }).done(function(response){
            console.log(response);
            resolve(response);
        }).fail(function(response) {
            store.commit('modal/set', {message: response.responseText, warning: true});
        });
    });
};


export default {
    register
}