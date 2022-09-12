const errorComp = {
  template: `
    <div class="error-block" v-if="text">
                     <p class="error-msg">
                     <button class="close-btn" @click="setText('')">&times;</button>
                     {{text}}
                     </p>
                 </div>
  `,
  data() {
    return {
      text: ''
    }
  },
  methods: {
    setText(value) {
      this.text = value;
    }
  },
}
