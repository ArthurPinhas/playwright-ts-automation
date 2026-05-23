import { APIRequestContext } from "@playwright/test";
import { User } from "../models/User";

export class ApiClient {
    private context: APIRequestContext;

    constructor(context: APIRequestContext) {
        this.context = context;
    } 

    async getUser(userId: number) {  
        const response = await this.context.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok()) {
            throw new Error(`Failed to fetch user with id ${userId}: ${response.status()}`);
        }
        return await response.json() as User;
    }
}