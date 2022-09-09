export const selectFlights = state => state.general.flights;
export const selectFlight = id => state => state.general.flights[id];
export const selectLoading = state => state.general.loading;
export const selectSearchForm = state => state.general.searchForm;
export const selectTheme = state => state.general.theme;