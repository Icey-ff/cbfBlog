import mitt from "mitt"
const emitter = mitt();
const bus: any = {};
bus.$on = emitter.on;
bus.$emit = emitter.emit;
export default bus;