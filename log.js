AFRAME.registerComponent("log", {
    
    schema: {
        message:{type: "string", default: "hello"}
    },

    init: function () {
        console.log(this.data.message);
    }
})