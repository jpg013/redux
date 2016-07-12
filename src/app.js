import {expect} from 'chai';

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

state = counter(state, {type:'INCREMENT'});
expect(state).to.equal(1);

state = counter(state, {type:'INCREMENT'});
expect(state).to.equal(2);

state = counter(state, {type:'DECREMENT'});
expect(state).to.equal(1);

state = counter(state, {type:'DECREMENT'});
expect(state).to.equal(0);

state = counter(state, {type:'SOMETHING_ELSE'});
expect(state).to.equal(0);


console.log('all tests are passing');
