import { produce } from "immer"
import { renderDOM } from "../renderDOM"

const lastState = [];

export function initState (data:any) {
    lastState.push(data);
    renderDOM(lastState[0]);
}

export const updateState = function updateState (updateFucnt:any) {
    lastState[lastState.length - 1]
    const nextState = produce(lastState[lastState.length - 1], updateFucnt);
    renderDOM(nextState);
    lastState.push(nextState);
    return true;
}

export const updateStatePromise = function updateStatePromise (updateFucnt:any) {
    return new Promise((resolve, reject) => {
        try {
            const nextState = produce(lastState[lastState.length - 1], updateFucnt);
            renderDOM(nextState);
            lastState.push(nextState);
            resolve();
        } catch (err) {
            reject(err);
        }
    })
}

export function getCurrentState () {
    if (!lastState) return;
    return lastState[lastState.length - 1];
}

export function getStateHistory() {
    return lastState;
}

export const undo = function undo () {
    if (lastState.length <= 1) return;
    lastState.pop();
    renderDOM(lastState[lastState.length - 1]);
    return true;
}