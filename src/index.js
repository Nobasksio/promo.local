import _ from 'lodash';

import Vue from 'vue';

import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import './style.css';


function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.classList.add('hello');

    return element;
}

document.body.appendChild(component());