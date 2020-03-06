var spinnerActionCreators = {
    up(delta = 1) {
        return { type: 'UP', payload: delta };
    },
    down(delta = 1) {
        return { type: 'DOWN', payload: delta };
    },
    doubleUp() {
        return { type: 'DOUBLE_UP' }
    },
    doubleDown() {
        return { type: 'DOUBLE_DOWN' }
    }
};

export default spinnerActionCreators;