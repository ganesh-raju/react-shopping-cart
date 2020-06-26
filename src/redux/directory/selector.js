import { createSelector } from "reselect";

const selectDirectory = state => state.directory

export const selectItems = createSelector(
    [selectDirectory],
    directory => directory.sections
)