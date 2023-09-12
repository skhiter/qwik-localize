import type { RequestHandler } from "@builder.io/qwik-city";
import { extractLang } from "~/i18n";

export const onGet: RequestHandler = async ({ redirect, url, params }) => {
  const guessedLocale = extractLang(params.lang);
  console.log(`  ➜  GET / - Redirecting to /${guessedLocale}...`);
  throw redirect(301, `/${guessedLocale}/${url.search}`);
};