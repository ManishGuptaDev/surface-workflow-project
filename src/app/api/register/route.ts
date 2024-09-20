import { registerUser } from "~/server/users";

type RegisterPayload = {
    surfaceTagId: string;
}

export async function POST(request: Request) {
    const res = await request.json() as RegisterPayload
    const result = await registerUser(res.surfaceTagId) 
    return Response.json({ result });
  }