"use strict";
exports.__esModule = true;
function selectedEntity(state) {
    if (!state.selectedId) {
        return null;
    }
    return state.all[state.selectedId];
}
exports.selectedEntity = selectedEntity;
function mapEntities(state) {
    return state.ids.map(function (id) { return state.all[id]; });
}
exports.mapEntities = mapEntities;
function isLoaded(state) {
    return !state.loading && state.touched && !state.errors.length;
}
exports.isLoaded = isLoaded;
function isLoading(state) {
    return state.loading && state.touched && !state.errors.length;
}
exports.isLoading = isLoading;
function isErrorState(state) {
    return !state.loading && state.touched && state.errors.length > 0;
}
exports.isErrorState = isErrorState;
