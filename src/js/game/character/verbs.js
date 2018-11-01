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
        return 'You look around. But you see nothing of interest.'
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