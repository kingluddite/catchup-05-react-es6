const createState = function() {
  const state = {
    name: 'Bella',
    age: 45,
    friends: ['Jeremy', 'Edith', 'Ellison', 'Savannah']
  };

  const setState = function(newState) {
    for (let key in state) {
      if (newState.hasOwnProperty(key)) {
        state[key] = newState[x];
      }
    }
  };

  setState({ name: 'Laura' });
};

createState();
