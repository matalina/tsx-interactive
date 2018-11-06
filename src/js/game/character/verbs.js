import store from '../../store';

let verbs =  {
    ask: function(words) {
        return 'You asked something.';
    },

    drop: function(words) {
        return 'You dropped something.';
    },

    e: function(words) {
        return verbs.east(words);
    },
    east: function(words) {
        return verbs.move('east');
    },

    go: function(words) {
        return verbs.move(words);
    },

    help: function(words) {
        return 'You ask for help.'
    },

    l: function(words) {
        return verbs.look(words);
    },
    listen: function(words) {
        return 'You listen carefully.'
    },
    look: function(words) {
        let object = null,
            room = null;
        switch(words[0]) {
            case 'at':
                object = words.splice(1).join('-');
                break;
            case 'north':
            case 'east':
            case 'south':
            case 'west':
                room =  store.state.location.map[words[0]];
                break;
            case 'around':
                room = store.state.location.tag;
                break;
            default:
                return 'You look around. But you see nothing of interest.'
        }

        if(object !== null) {
            return store.state.items[object].description;
        }
        if(room !== null) {
            return store.state.room[room].description;
        }
    },

    move: function(words) {
        return `You move ${words}`;
    },

    n: function(words) {
        return verbs.north(words);
    },
    north: function(words) {
        return verbs.move('north');
    },

    put: function(words) {
        return 'You put something somewhere.';
    },

    reset: function(words) {
        store.commit('reset');
        return '';
    },
    restart: function(words) {
        return verbs.reset(words);
    },

    s: function(words) {
        return verbs.south(words);
    },
    say: function(words) {
        return `You say ${words}`;
    },
    search: function(words) {
        return 'You search for the meaning of life.';
    },
    south: function(words) {
        return verbs.move('south');
    },

    take: function(words) {
        return 'You take something';
    },
    tell: function(words) {
        return `You tell someone off.  That wasn't nice.`
    },

    use: function(words) {
        return 'You use something.'
    },

    w: function(words) {
        return verbs.west(words);
    },
    west: function(words) {
        return verbs.move('west');
    }
};

export default verbs;