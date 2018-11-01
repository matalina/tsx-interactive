<template>
    <div id="game">
        <main class="row">
            <div class="col-lg-2"></div>
            <div id="display" class="p-5 col-lg-8">
                <div v-for="d in story">
                    <div :class="d.type"
                         v-html="markdown(d.text)"
                    ></div>
                </div>
            </div>
            <div class="col-lg-2"></div>
        </main>
        <nav class="navbar fixed-bottom navbar-expand navbar-dark bg-dark">
            <div class="nav-item form-group my-2 w-100">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text bg-dark text-primary border-dark">
                            <i class="fal fa-fw fa-angle-right"></i>
                        </div>
                    </div>
                    <input class="form-control"
                           id="command-line"
                           type="text"
                           placeholder="What do you want to do?"
                           v-model="command"
                           @change="execute()"
                           autofocus
                    />
                    <div class="input-group-append">
                        <button class="btn btn-danger"
                                @click="reset()"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import chapters from '../game/chapters';
    import verbs from '../game/character/verbs';
    import { mapState } from 'vuex';
    const MarkdownIt = require('markdown-it'),
        md = new MarkdownIt({
            html:         true,        // Enable HTML tags in source
            xhtmlOut:     true,        // Use '/' to close single tags (<br />).

        });

    export default {
        name: 'display',
        data: function () {
            return {
                command: null,
                chapters,
            }
        },
        computed: {
            display: function() {
                return this.story.reverse();
            },
            verbs() {
                return {
                        ...verbs,
                        ...this.character.verbs,
                        ...this.character.profession.verbs,
                        ...this.character.mutation.verbs,
                };
            },
            start() {
                return this.chapters[0];
            },
            ...mapState([
                'story',
                'progress',
                'character',
            ])
        },
        methods: {
            markdown(output) {
                return md.render(output);
            },
            reset() {
                this.$store.commit('reset');
            },
            execute() {
                let words = this.command.split(' '),
                        verb = words[0],
                        remainder = words.splice(1);

                this.saveStory({
                    type: 'command',
                    text: `<i class="fal fa-fw fa-terminal"></i> ${this.command}`,
                });

                if(this.isExit()) {
                    this.exit();
                }
                else if(this.validateVerb(verb)) {
                    let action = this.verbs[verb];

                    this.saveStory({
                        type: 'action',
                        text: action(remainder),
                    });
                }
                else {
                    this.saveStory({
                        type: 'error',
                        text: `<i class='fal fa-fw fa-exclamation-triangle'></i> ${verb} directive is unknown.  Please start with a verb or a question word.`,
                    });
                }

                this.command = '';
            },
            // validation
            validateVerb(verb) {
                return typeof this.verbs[verb] === 'function';
            },
            isExit() {
                let exit = this.chapters[this.progress].exit,
                    pattern = new RegExp(exit,'ig');

                return this.command.search(pattern) !== -1;
            },

            // end game
            exit() {
                let progress = this.progress,
                    text = this.chapters[progress].next;
                this.saveStory({
                    type: 'action',
                    text,
                });

                if(this.chapters[progress + 1] !== undefined) {
                    this.saveStory({
                        type: 'chapter',
                        object: this.chapters[progress + 1],
                        text: this.chapters[progress + 1].description,
                    });
                    this.saveProgress(progress + 1);
                }
                else {
                    this.saveStory({
                        type: 'the-end',
                        text: `# The End`
                    });
                }
            },

            // state saving
            saveStory(object) {
                this.$store.commit('story-add',object);
            },
            saveProgress(chapter_number){
                this.$store.commit('progress-update', chapter_number);
            },
        },
    };
</script>

<style lang="scss">

</style>