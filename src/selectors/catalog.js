import {createSelector} from 'reselect'

export const selectHotels = state => state.catalog.hotels;
export const selectError = state => state.catalog.error;
export const selectLoadingHotels = state => state.catalog.loadingHotels;
export const selectLoadingFilters = state => state.catalog.loadingFilters;
export const selectFilters = createSelector(
  [state => state.catalog.filters],
  (filters) => filters && Object.entries(filters.filter),
);