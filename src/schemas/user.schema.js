import z from "zod";


export const createUserSchema = z.object({
    body: z.object({
        username: z.string({ error: 'Username must be a string.' })
            .min(3, { error: 'Username must be at least 3 characters.' })
            .max(30, { error: 'Username cannot be longer than 30 characters.' }),
        email: z.email({ error: 'Email must be a valid email.' }),
        password: z.string({ error: 'Password must be a string.' })
            .min(4, { error: 'Password must be at least 4 characters. '})
            .max(32, { error: 'Password cannot be longer than 32 characters.' })
    })
})