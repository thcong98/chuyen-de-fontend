import axiosClient from "./axiosClient";

const sharingDetailService = {
    addsharingdetail: (params) => {
        const url = "/sharingdetail";
        return axiosClient.post(url, params);
    },
    getsharingdetail: () => {
        const url = "/sharingdetail";
        return axiosClient.get(url);
    },
    getsharingdetailid: (id) => {
        const url = `/sharingdetail/${id}`;
        return axiosClient.get(url);
    },
    deletesharingdetail: (id) => {
        const url = `/sharingdetail/${id}`;
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
export default sharingDetailService;