import axios from "axios";
import config from "./config"

export default function (service, options, conf) {
    let baseParams = config.base_params;
    let data = {
        ...baseParams,
        ...options
    };

    let url = data.mock ? "/api" : config.api_url + service;


    let axiosConfig = {
        url,
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        data: data
    }

    if (conf) {
        axiosConfig = Object.assign({}, axiosConfig, conf);
    }

    return axios(axiosConfig)
        .then((res) => {
            if (res.status == 200) {
                return res.data;
            }
        });
}
