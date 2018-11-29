import { createSelector } from 'reselect';

export const getSelectedLibrary = createSelector(
    [
        state => state.libraries.selectedLibrary,
        state => state.libraries.data
    ],
    (selectedLibrary, libraryList) => {
        console.log(selectedLibrary, libraryList)
       return libraryList[selectedLibrary];
    }
)