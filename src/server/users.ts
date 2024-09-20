"use server";

import { db } from './db'
import { type User } from '@prisma/client'

export const registerUser = async (surfaceTagId: string) => {
    // Check if we have a user with the given surfaceTagId
    const existingUser: User | null = await db.user.findUnique({
        where: {
            surfaceTagId: surfaceTagId,
        },
    });

    // If the user exists, return a message indicating they already exist
    if (existingUser) {
        return { created: false, message: 'User already exists' };
    }

    // If not, create a new user in the database
    const newUser = await db.user.create({
        data: {
            surfaceTagId: surfaceTagId
        },
    });

    // Return a success message indicating that the user has been created
    return { created: true, message: 'User registered successfully', userId: newUser.id };

}

export const isUserRegistered = async (surfaceTagId: string) => {
    // Check if the user exists in the database
    const user = await db.user.findUnique({
        where: { surfaceTagId: surfaceTagId },
    });

    if (user) {
        return { registered: true, message: 'User is registered' };
    } else {
        return { registered: false, message: 'User not found' };
    }
}