AFRAME.registerComponent("mover",{

    schema:{
    position: { type: "number", default: 0 }
        
    },
    
    tick:function () {
        this.data.position += 0.01;
        var boxPosition = this.el.getAttribute("position")
        boxPosition.x = this.data.position
        boxPosition.y = this.data.position
        boxPosition.z = this.data.position
        this.el.setAttribute("position", {x:boxPosition.x, y:boxPosition.y, z:boxPosition.z});
    }

})