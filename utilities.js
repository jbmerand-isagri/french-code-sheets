'use strict';

// use import * as util from './utilities.js' in new js files to use it

/**
 * select many dom elements and listen to them
 * @param {string} selector - CSS selector of many elements in the DOM
 * @param {string} type - type of event affecting elements
 * @param {function} callbackFn - name of extern function or arrow function
 */
function selectListenEventManyElements(selector, type, callbackFn) {
    let manyElements = document.querySelectorAll(selector);
    manyElements.forEach(function(element) {
        element.addEventListener(type, callbackFn);
    });
}

/**
 * check if an element exists
 * @param {string} node - dom element
 * @returns {boolean}
 */
function isInPage(node) {
    return (node === document.body) ? false : document.body.contains(node);
}

/**
 * check if an element is in viewport
 * @param {string} el - dom element
 */
function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * load json data from the local storage
 * @param {string} key - name of the key to load
 */
function loadFromLocalStorage(key) {
    return JSON.parse(window.localStorage.getItem(key));
}

/**
 * save data to local storage (stringify to json)
 * @param {string} key - name of the key to save
 * @param {mixed} data - data to store
 */
function saveToLocalStorage(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
}

export {selectListenEventManyElements,isInPage,isElementInViewport,loadFromLocalStorage,saveToLocalStorage}
