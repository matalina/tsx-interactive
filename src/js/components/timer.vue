<template>
    <div id="timer">
        {{ session }}
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'timer',
        data() {
            return {
                start: moment(),
                diff: 0,
            };
        },
        computed: {
            session: function() {
                let seconds = this.diff % 60, // remainder is left over seconds
                    total_mins = Math.floor(this.diff / 60),
                    mins = total_mins % 60, // remainder is left over mins
                    total_hours = Math.floor(total_mins / 60),
                    hours = (total_hours) % 24, // remainder is left over hours
                    days = Math.floor(total_hours / 24); // total days since start

                return `${days}d${hours}h${mins}m${seconds}s`;
            },
        },
        methods: {
            tick() {
                this.diff++;
            },
        },
        created() {
            setInterval(this.tick, 1000)
        }
    };
</script>

<style>

</style>