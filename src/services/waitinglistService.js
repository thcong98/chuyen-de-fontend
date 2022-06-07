import axiosClient from "./axiosClient";

const waitinglistService = {
    add: (params) => {
        const url = "/waitinglist";
        return axiosClient.post(url, params);
    },
    getuserid: (id) => {
        const url = `/waitinglist/user/${id}`;
        return axiosClient.get(url);
    },
    delete: (id) => {
        const url = `/waitinglist/${id}`;
        return axiosClient.delete(url);
    },
    dowload: () => {
        const url = `/waitinglist/export`;
        return axiosClient.get(url);
    },
}
export default waitinglistService;