import { NextResponse } from 'next/dist/server/web/spec-extension/response';

export async function POST(request: Request) {
  const data = await request.json();
  console.log('API Routesで受け取りました', data.name);

  return NextResponse.json({ message: '成功' });
}
