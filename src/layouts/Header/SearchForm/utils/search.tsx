export const displaySearch = (pathname: string): boolean => {
  return (
    pathname.includes("plan/listing") ||
    pathname.includes("scene/listing") ||
    pathname.includes("song/listing") ||
    pathname.includes("project/listing")
  );
};
