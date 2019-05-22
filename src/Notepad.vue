<template>
    <div class="notepad" :class="{ editable }"  @click="onClickContainer">
        <component v-component-model="form.header" v-autogrow="editable" ref="header" :is="is" class="notepad-header"><slot name="header" /></component>

        <div class="notepad-lines">
            <component v-component-model="form.body" v-autogrow="editable" ref="body" :is="is" class="notepad-body"><slot/></component>
        </div>
        
        <component v-component-model="form.footer" v-autogrow="editable" ref="footer" :is="is" class="notepad-footer"><slot name="footer" /></component>
    </div>
</template>

<script>
import Autogrow from 'vue-interface/src/Directives/Autogrow';

export default {

    props: {
        editable: Boolean
    },

    directives: {
        Autogrow,
        componentModel: {
            inserted(el, binding, vnode) {
                const parts = binding.expression.split('.');
                const varName = parts.pop();
                const context = parts.reduce((carry, value) => {
                    return carry[value]
                }, vnode.context);

                el.addEventListener('input', e => {
                    vnode.context.$set(context, varName, e.target.value);
                });

                el.value = (vnode.children || []).map(slot => {
                    return slot.elm.outerHTML || slot.elm.textContent;
                })
                .join("\n");
                
                vnode.context.$set(context, varName, el.value);
            }
        }
    },

    watch: {

        form: {
            deep: true,
            handler(value) {
                this.$emit('input', this.form);
            }
        }

    },

    computed: {
        is() {
            return this.editable ? 'textarea' : 'div';
        }
    },

    methods: {
        
        onClickContainer() {
            if(this.$refs.body && this.editable) {
                // this.$refs.body.focus();
            }
        }

    },

    data() {
        return {
            form: {
                header: null,
                body: null,
                footer: null
            }
        }
    }

};
</script>

<style lang="scss">
$notepad-font-size: 1rem;
$notepad-line-height: 2rem;

$notepad-gutter-size: $notepad-line-height * 2;

$notepad-header-font-size: 1.5rem;
$notepad-header-line-height: $notepad-header-font-size * 1.25;

$notepad-footer-font-size: .85rem;
$notepad-footer-line-height: $notepad-footer-font-size * 1.25;

$notepad-line-padding-right: calc(#{$notepad-gutter-size / 2} + #{$notepad-line-height / 2});
$notepad-line-padding-left: calc(#{$notepad-gutter-size} + #{$notepad-line-height / 2});

.notepad {
    display: flex;
    position: relative;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 0px 5px 0px #888;

    &::before {
        content: "";
        position: absolute;
        left: $notepad-gutter-size;
        height: 100%;
        width: 2px;
        background: rgba(255, 0, 0, 0.4);
    }

    &.editable .notepad-lines {
        padding-bottom: $notepad-line-height;
    }
    
    textarea.notepad-header,
    textarea.notepad-body,
    textarea.notepad-footer {
        border: 0;
        margin: 0;
        padding: 0;
        outline: none;
        resize: none;
        width: 100%;
        height: 100%;
        background: none;
        overflow: hidden;
    }
    
    .notepad-header, textarea.notepad-header {
        z-index: 2;
        position: relative;
        text-align: center;
        min-height: $notepad-line-height;
        margin-top: $notepad-header-line-height / 2;
        margin-bottom: $notepad-header-line-height / 2;
        font-size: $notepad-header-font-size;
        line-height: $notepad-header-line-height;
    }
    
    .notepad-footer, textarea.notepad-footer {
        z-index: 2;
        position: relative;
        text-align: center;
        min-height: $notepad-line-height;
        font-size: $notepad-footer-font-size;
        line-height: $notepad-footer-line-height;
    }

    .notepad-lines {
        margin-top: -$notepad-line-height;
        background-image: repeating-linear-gradient(
            white 0px,
            white calc(2rem - 1px),
            steelblue $notepad-line-height
        );
    }

    .notepad-body, textarea.notepad-body {
        font-weight: 500;
        font-size: $notepad-font-size;
        font-family: Courier, monospace;
        margin-top: $notepad-line-height;
        line-height: $notepad-line-height;
        padding-left: $notepad-line-padding-left;
        padding-right: $notepad-line-padding-right;
        // padding-bottom: $notepad-line-height;

        * {
            margin: 0 !important;
            line-height: $notepad-line-height !important;
        }

        a {
            font-weight: bold;
        }
    }
}
</style>
