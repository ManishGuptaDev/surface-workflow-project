import { saveEvent } from "~/server/event";

type TrackPayload = {
    surfaceTagId: string;
    eventName: string;
    metadata: object;
    visitorId: string;
}

export async function POST(request: Request) {
    const res = await request.json() as TrackPayload
    const result = await saveEvent(res.eventName, res.surfaceTagId, res.metadata, res.visitorId)
    return Response.json({ result });
}