import { EventEmitter } from './EventEmitter';

export const obj = {
    count: 0,
    subscribe() {
        //1
        this.call = () => this.count++;
        EventEmitter.on('click', this.call);
    },
    unsubscribe() {
        //2
        EventEmitter.off('click', this.call);
    },
};

export const obj1 = {
    first(...args) {
        this.second(...args.reverse());
    },
    second() {},
};
