import type { StructureResolver } from "sanity/structure";
import { HomeIcon, DocumentsIcon, BookIcon } from "@sanity/icons";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home Page")
        .icon(HomeIcon)
        .child(
          S.document().schemaType("homePage").documentId("homePage")
        ),
      S.divider(),
      S.listItem()
        .title("Offerings Page")
        .icon(DocumentsIcon)
        .child(
          S.document().schemaType("offeringsPage").documentId("offeringsPage")
        ),
      S.divider(),
      S.listItem()
        .title("Ancient Herstory Page")
        .icon(BookIcon)
        .child(
          S.document()
            .schemaType("ancientHerstoryPage")
            .documentId("ancientHerstoryPage")
        ),
    ]);
