<template>
    <html>
        <body>
            <div class="container m-5">
                
                <h1>Display Only</h1>
                
                <notepad>
                    <template #header>
                        <h1 style="margin:0">Header</h1>
                    </template>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis leo sit amet mi luctus, sit amet venenatis dui sollicitudin. Integer porta vehicula ex sed pulvinar. Nulla facilisi. Praesent eget erat nec lectus viverra porttitor et in neque. Phasellus accumsan, nibh sed lacinia consequat, metus sapien malesuada augue, id vehicula metus magna sed dui.</p>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis leo sit amet mi luctus, sit amet venenatis dui sollicitudin. Integer porta vehicula ex sed pulvinar. Nulla facilisi. Praesent eget erat nec lectus viverra porttitor et in neque. Phasellus accumsan, nibh sed lacinia consequat, metus sapien malesuada augue, id vehicula metus magna sed dui.</p>

                    <ol>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    </ol>

                    <template #footer>
                        <h4 style="margin:0">Footer</h4>
                    </template>
                </notepad>

                <hr>

                <h1>Editable</h1>

                <notepad v-model="value" editable>
                    <template #header>
                        123

                        <p class="test" :class="'test'" :test="123" data-test="123">Header</p>

                        <p>Header</p>

                        <p>Header</p>

                        test
                    </template>

<template #default>    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis leo sit amet mi luctus, sit amet venenatis dui sollicitudin.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis leo sit amet mi luctus, sit amet venenatis dui sollicitudin. Integer porta vehicula ex sed pulvinar. Nulla facilisi. Praesent eget erat nec lectus viverra porttitor et in neque. Phasellus accumsan, nibh sed lacinia consequat, metus sapien malesuada augue, id vehicula metus magna sed dui. Pellentesque cursus imperdiet arcu at fermentum. Suspendisse potenti. Phasellus eget mi eu libero dapibus viverra. Pellentesque convallis urna id risus dictum, et pretium arcu ultricies. Donec a ultrices magna, id dignissim diam. Sed venenatis sit amet nulla nec dictum. Nulla ut quam cursus, interdum mauris a, pretium magna. Sed volutpat ultricies tincidunt. Fusce ipsum lacus, accumsan non nunc id, tristique malesuada risus. Phasellus molestie tortor et erat cursus posuere. Phasellus mollis est lacus, eu congue lorem facilisis eget.

    Phasellus euismod facilisis enim, ut convallis neque. Mauris viverra metus quis neque vulputate condimentum. Vestibulum sit amet vestibulum dui. Maecenas lacinia nulla non tempus imperdiet. Sed commodo facilisis ligula, vitae imperdiet orci laoreet a. In rutrum erat non feugiat vestibulum. Sed aliquet, metus at finibus dapibus, est neque venenatis nisi, vitae pharetra nisl magna sed ante. Fusce aliquet aliquam rhoncus.
</template>

                    <template #footer></template>
                </notepad>

                <code v-if="value"><pre>{{ value }}</pre></code>
            </div>
        </body>
    </html>
</template>

<script>
import Notepad from './Notepad';

export default {

    components: {
        Notepad
    },

    data() {
        return {
            value: null
        };
    }

};
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
</style>
