
type RegisterPayload = {
    surfaceTagId: string;
}

export async function POST(request: Request) {
    const res = await request.json() as RegisterPayload
    return Response.json({ res })
  }