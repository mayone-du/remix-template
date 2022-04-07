import { renderToString } from "react-dom/server";
import { RemixServer } from "@remix-run/react";
import { injectStylesIntoStaticMarkup } from "@mantine/ssr";
import { EntryContext } from "@remix-run/react/entry";
import Buffer from "buffer";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );
  responseHeaders.set("Content-Type", "text/html");

  return new Response(
    `<!DOCTYPE html>${injectStylesIntoStaticMarkup(markup)}`,
    {
      status: responseStatusCode,
      headers: responseHeaders,
    }
  );
}
