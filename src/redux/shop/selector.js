import { createSelector } from "reselect";

const shopItems = state => state.shop

export const selectCollections = createSelector(
    [shopItems],
    shop => shop.collections
)