'use strict';
// { name: タスクの文字列, state: 完了しているかどうかの真偽値 }
const tasks = [];

/**
 * TODOを追加する
 * @param {string} task
 */
function add(task) {
    tasks.push({ name: task, state: false });
}

/**
 * 
 *  タスクが完了したかどうかを返します。
 * @param {Object} task 
 * @returns {boolean}
 */

function isDone(task) {
    return task.state;
}

/**
 * 
 *  タスクが未完了かどうかを返します。
 * @param {Object} task 
 * @returns {boolean}
 */

function isNotDone(task) {
    return !isDone(task);
}

/**
* TODOの一覧の配列を取得する
* @return {array}
*/
function list() {
    return tasks
        .filter(isNotDone)
        .map(t => t.name);
}
let arr = [];
arr.filter(() => {

})
/**
 * 
 * @param {String} taskName 
 */
function done(taskName) {
    const indexFound = tasks.findIndex((t => {
        return t.name === taskName
    }))

    if (indexFound !== -1) tasks[indexFound].state = true;
}

function donelist() {
    return tasks
        .filter(isDone)
        .map((task) => task.name)
}

/**
 * 
 * @param {String} taskName
 */

function del(taskName) {
    const indexFound = tasks.findIndex((task) => task.name === taskName);
    if (indexFound !== -1) tasks.splice(indexFound, 1);
}

module.exports = { add, list, done, donelist, del };