export const getLoadLaunchesUrl = (filters={}) => {
    const url = "https://api.spacexdata.com/v3/launches"

    const queryParams = [];
    filters.limit = filters.limit ? filters.limit : 100;
    Object.keys(filters).forEach((i) => {
        queryParams.push(`${i}=${filters[i] ? filters[i].toString() : ''}`)
    })

    return `${url}?${queryParams.join('&')}`;
    // return 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014';
};

export default {
    getLoadLaunchesUrl
};