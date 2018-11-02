import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

import character from '../game/character/character';
import start from '../game/chapters/000';

import id from '../game/items/id';
import mouse from '../game/items/mouse';

import oyn from '../game/rooms/old-new-york';
import ac100 from '../game/rooms/ac100';
import ac100100 from '../game/rooms/ac100-100';
import ac100365 from '../game/rooms/ac100-365';
import ac100365b from '../game/rooms/ac100-365-b';
import ac100365bbath from '../game/rooms/ac100-365-b-bath';
import ac100e from '../game/rooms/ac100-elevator';
import ac100s from '../game/rooms/ac100-stairs';

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        story: [
            {
                type: 'chapter',
                object: start,
                text: start.description,
            }
        ],
        character,
        progress: 0,
        location: null,
        items: {
            id,
            mouse,
        },
        rooms: {
            'old-new-york': oyn,
            ac100,
            'ac100-100': ac100100,
            'ac100-365': ac100365,
            'ac100-365-b': ac100365b,
            'ac100-365-b-bath': ac100365bbath,
            'ac100-elevator': ac100e,
            'ac100-stairs': ac100s,
        },
    },
    mutations: {
        'story-add': function(state, object) {
            state.story.push(object);
        },
        'progress-update': function(state, progress) {
            state.progress = progress;
        },
        'location-update': function(state, room) {
            state.location = room;
        },
        'reset': function(state) {
            state.story = [
                {
                    type: 'chapter',
                    object: start,
                    text: start.description,
                }
            ];
            state.character = character;
            state.location = null;
            state.progress = 0;
            state.items = {
                id,
                mouse,
            };
            state.rooms = {
                'old-new-york': oyn,
                ac100,
                'ac100-100': ac100100,
                'ac100-365': ac100365,
                'ac100-365-b': ac100365b,
                'ac100-365-b-bath': ac100365bbath,
                'ac100-elevator': ac100e,
                'ac100-stairs': ac100s,
            };
        }
    }
});