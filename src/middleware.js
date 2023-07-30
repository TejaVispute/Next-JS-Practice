import { NextResponse } from "next/server";

export function middleware(request) {
    // console.log(request.url);

    return NextResponse.redirect(new URL("/login", request.url))
}


export const config = {
    matcher: ["/about/:path*"]
} 