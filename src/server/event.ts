"use server";

import { db } from './db'

export const saveEvent = async (name: string, surfaceTagId: string, metaData: object, visitorId: string) => {
    const newEvent = await db.event.create({
        data: {
            name: name,
            metadata: metaData,
            surfaceTagId: surfaceTagId,
            visitorId: visitorId
        },
    });

    // Return a success message indicating that the event has been created
    return { created: true, message: 'Event saved successfully', eventId: newEvent.id };
}