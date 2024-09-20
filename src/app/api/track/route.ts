
type TrackPayload = {
    surfaceTagId: string;
    eventName: string;
    metadata: object
}

export async function POST(request: Request) {
    const res = await request.json() as TrackPayload
    return Response.json({ res })
  }