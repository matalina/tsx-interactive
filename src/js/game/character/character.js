import hunter from './hunter';
import aphen from './aphen';

const character = {
    name: 'Phoenix',
    nicknames: ['Nix'],
    tag: 'nix',
    age: 21,
    prestige: 31,
    id: '6-M1U6Q5R-V2C986L-PH03N1X',
    credits: 1500370,
    basic: {
        hair: 'You have been told your hair is the color brown.',
        eyes: 'You were born without eyes.',
        height: 'You are six feet tall.',
        tattoo: 'Your ID number is tattooed on your right collar bone as a barcode for easy scanning.  The same number is laser-etched microscopically on the collar bone underneath the visible tattoo',
        clothes: 'You tend to wear all black, since color is not something you see.  You always wear a long leather coat with large pockets that hangs to just above your ankles and is rarely buttoned.  You wear a comfortable t-shirt and a pair of tough leather pants tucked inside a pair of thigh-high leather boots that zip with a large gun-metal zipper handle on the outside of each leg. Your ID card hangs from a gun-metal chain around your neck.'
    },
    profession: hunter,
    history: [
        // cover the 10 prestige points
    ],
    pocket: [
        'mouse',
        'id',
    ], // 5 small things
    mutation: aphen,
    cybernetics: [
        {
            location: 'above right eye',
            type: 'camera',
            description: 'Above your right eyes is a camera that picks up anything you look at and wirelessly transmits the data to your little black box.',
        },
        {
            location: 'inner ear',
            type: 'audio',
            description: 'Attached to the bones inside your right ear and jaw is a microphone and speaker that relay information to you wirelessly from your little black box.'
        }
    ],
    verbs: {
        mouse: function(do_something) {
            return `M0U53 doesn't understand what you are asking of her.`
        },
    },
};

export default character;