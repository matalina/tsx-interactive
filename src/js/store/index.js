import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

import character from '../game/character/character';
import start from '../game/chapters/000';

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
    },
    mutations: {
        'story-add': function(state, object) {
            state.story.push(object);
        },
        'progress-update': function(state, progress) {
            state.progress = progress;
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
            state.progress = 0;
        }
    }
});