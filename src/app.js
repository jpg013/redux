import {expect} from 'chai';
import {createStore} from 'redux';

// init state to 0
var state = 0;

const counter = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
          return state + 1;
        case 'DECREMENT':
          return state -1;
        default:
          return state;
    }
};

const store = createStore(counter);

store.dispatch({type:'INCREMENT'});
expect(store.getState()).to.equal(1);

store.dispatch({type:'INCREMENT'});
expect(store.getState()).to.equal(2);

store.dispatch({type:'DECREMENT'});
expect(store.getState()).to.equal(1);

store.dispatch({type:'DECREMENT'});
expect(store.getState()).to.equal(0);

store.dispatch({type:'SOMETHING_ELSE'});
expect(store.getState()).to.equal(0);

console.log('Tests passing');
