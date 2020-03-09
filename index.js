var createState = function() {
  var state = {
    name: 'Bella',
    age: 45,
    friends: ['Jeremy', 'Edith', 'Ellison', 'Savannah']
  };

  var setState = function(newState) {
    for (var key in state) {
      if (newState.hasOwnProperty(key)) {
        state[key] = newState[x];
      }
    }
  };

  setState({ name: 'Laura' });
};

createState();
