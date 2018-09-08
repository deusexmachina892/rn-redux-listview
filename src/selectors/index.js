import { createSelector } from 'reselect';

export const getSelectedLibrary = createSelector(
    libraryState,
    (selectedLibrary, libraryList) => {
       return libraryList[selectedLibrary];
    }
)