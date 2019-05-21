<template>
    <component v-autogrow="editable" :is="'textarea'" @input="e => $emit('input', e.target.value)">
        <slot />
    </component>
</template>

<script>
import NotepadSlot from './NotepadSlot';
import Autogrow from 'vue-interface/src/Directives/Autogrow';

export default {

    props: {
        editable: Boolean
    },

    components: {
        NotepadSlot
    },

    directives: {
        Autogrow
    },

    methods: {
        onInput() {
            console.log('asd');
        }
    },

    mounted() {
        this.$nextTick(() => {
            this.$el.value = (this.$slots.default || [])
                .map(slot => {
                    return slot.elm.outerHTML || slot.elm.textContent;
                })
                .join("\n");
        });
    },

    data() {
        return {
            value: null
        }
    }

};
</script>