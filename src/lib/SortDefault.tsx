import { Frontmatter } from "@/types/content";

export function sortDateFn<T extends Frontmatter>(contentA: T, contentB: T) {
  return (
    new Date(contentB.publishedAt).valueOf() -
    new Date(contentA.publishedAt).valueOf()
  );
}

export function sortByDate<T extends Frontmatter>(contents: Array<T>) {
  return contents.sort(sortDateFn);
}

export function sortTitleFn<T extends Frontmatter>(contentA: T, contentB: T) {
  return contentA.title.localeCompare(contentB.title);
}

export function sortByTitle<T extends Array<Frontmatter>>(contents: T): T {
  return contents.sort((a, b) =>
    a.title > b.title ? 1 : b.title > a.title ? -1 : 0
  );
}
