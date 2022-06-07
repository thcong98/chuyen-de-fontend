import axiosClient from "./axiosClient";

const sharingService = {
    addsharing: (params) => {
        const url = "/roomsharing";
        return axiosClient.post(url, params);
    },
    getsharing: () => {
        const url = "/roomsharing";
        return axiosClient.get(url);
    },
    getsharingid: (id) => {
        const url = `/roomsharing/${id}`;
        return axiosClient.get(url);
    },
    deletesharing: (id) => {
        const url = `/roomsharing/${id}`;
        return axiosClient.delete(url);
    },
    // updateroom: (id, params) => {
    //     const url = `/room/${id}`;
    //     return axiosClient.put(url, params);
    // },
    // getroominfoid: (id) => {
    //     const url = `/room/info/${id}`;
    //     return axiosClient.get(url);
    // },
    // searchroom: (params) => {
    //     const url = "/room/search";
    //     return axiosClient.post(url, params);
    // },

}
export default sharingService;