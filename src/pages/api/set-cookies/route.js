import { NextResponse } from 'next/server';

export async function GET() {
    const response = NextResponse.json({ message: 'Cookie set!' });

    response.cookies.set('token', 'secure-token', {
        httpOnly: true,   // Prevents client-side access
        secure: true,     // Only over HTTPS
        sameSite: 'Strict', // CSRF protection
        maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
}
