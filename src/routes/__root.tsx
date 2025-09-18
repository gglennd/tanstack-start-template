import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import { DefaultCatchBoundary } from "@/components/default-catch-boundary";

import { NotFound } from "@/components/not-found";
import { HeaderNav } from "@/routes/-components/header-navigation";
import appCss from "@/styles/global.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: `TanStack Start Starter | ${__APP_VERSION__}`,
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  notFoundComponent: () => <NotFound />,
  errorComponent: DefaultCatchBoundary,
  shellComponent: RootShell,
});

function RootShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <HeaderNav />
        {children}
        <Scripts />
      </body>
    </html>
  );
}
