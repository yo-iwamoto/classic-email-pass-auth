import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export function POST() {
  cookies().delete('token');
  return NextResponse.json({ success: true });
}
