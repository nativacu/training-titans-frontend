import axios, { AxiosRequestConfig } from "axios";
import { GetProfilesResult } from "./use-cases/get-profiles";
import { BaseGet } from "./use-cases/base-get";
import { GetTechnologiesResult } from "./use-cases/get-technologies";

export class GeneralService {
    
    baseUrl = 'http://localhost:3000';

    config: AxiosRequestConfig = {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiZXhwIjoxNjk4MjUzMDcxfQ.IhHiUD9VNrBe8M3ryc35QcuwBikq2kNHvTlBjIahHCw',
            'Content-Type': 'application/json'
        }
    }
    getProfiles(): Promise<BaseGet<GetProfilesResult>> {
        return axios.get(`${this.baseUrl}/api/profiles.json`, this.config);
    }

    getTechnologies(): Promise<BaseGet<GetTechnologiesResult>> {
        return axios.get(`${this.baseUrl}/api/technologies.json`, this.config);
    }
}