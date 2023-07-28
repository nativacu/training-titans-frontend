import axios, { AxiosRequestConfig } from "axios";
import { GetProfilesResult } from "./use-cases/get-profiles";
import { BaseGet } from "./use-cases/base-get";
import { GetTechnologiesResult } from "./use-cases/get-technologies";
import { SESSION_ID } from "../common/constants/session-id";
import { PostProfileResult } from "./use-cases/post-profile";
import { BasePost } from "./use-cases/base-post";
import { TechProfile } from "../common/types/TechStack";
import { Conversation } from "../common/types/Conversation";
import { PostConversationResult } from "./use-cases/post-conversation";
import { GetLanguagesResult } from "./use-cases/get-languages";

export class GeneralService {

    baseUrl = 'http://localhost:3000';

    config: AxiosRequestConfig = {
        headers: {
            'Authorization': `Bearer ${SESSION_ID}`,
            'Content-Type': 'application/json'
        }
    }

    getProfiles(): Promise<BaseGet<GetProfilesResult>> {
        return axios.get(`${this.baseUrl}/api/profiles.json`, this.config);
    }

    getTechnologies(): Promise<BaseGet<GetTechnologiesResult>> {
        return axios.get(`${this.baseUrl}/api/technologies.json`, this.config);
    }

    saveProfile(profile: Omit<TechProfile, 'language'> & { language: string }): Promise<BasePost<PostProfileResult>> {
        return axios.post(`${this.baseUrl}/api/profiles.json`, profile, this.config);
    }

    saveConversation(conversation: Conversation): Promise<BasePost<PostConversationResult>> {
        return axios.post(`${this.baseUrl}/api/conversations.json`, conversation, this.config);
    }
    
    getLanguages(): Promise<BaseGet<GetLanguagesResult>> {
        return axios.get(`${this.baseUrl}/api/languages.json`, this.config);
    }
}