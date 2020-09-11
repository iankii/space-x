export const getStoreData = (store) => store.getState();

export const launchDataSelector = (store) => {
    return getStoreData(store)
        && getStoreData(store).launchData
        && getStoreData(store).launchData.launches;
};

