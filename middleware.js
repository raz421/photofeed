import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

const defaultLocale = "en";
const locals = ["en", "bn"];

const getLocal = (response) => {
  const acceptedLocal = response.headers.get("accept-language") ?? undefined;
  let headers = { "accept-language": acceptedLocal };
  let languages = new Negotiator({ headers }).languages();
  return match(languages, locals, defaultLocale);
};

export function middleware(request) {
  const pathName = request.nextUrl.pathname;
  const missingLocal = locals.every(
    (local) =>
      !pathName.startsWith(`/${local}`) && !pathName.startsWith(`/${local}/`)
  );
  if (missingLocal) {
    const detectLocal = getLocal(request);
    return NextResponse.redirect(
      new URL(`/${detectLocal}/${pathName}`, request.url)
    );
  }
  return NextResponse.next();
}
export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    "/((?!api|assets|.*\\..*|_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
