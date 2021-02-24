import request from "supertest";
import {app} from "../app";

import createConnection from "../database";

describe("User",()=> {
    beforeAll( async ()=>{
        const connection = await createConnection();
        await connection.runMigrations()
    })

    it("Should be able to create a now user",async ()=>{
        const response = await request(app).post("/users").send({
            email:"asdadss@adsd.com",
            name:"nome dele"
        })
        expect(response.status).toBe(201);
    })

    it("Should be able to create a now user with same email",async ()=>{
        const response = await request(app).post("/users").send({
            email:"asdadss@adsd.com",
            name:"nome dele"
        })
        expect(response.status).toBe(400);
    })
})