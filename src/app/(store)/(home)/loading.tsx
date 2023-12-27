import { Skeleton } from "~/components/skeleton";

export default function Loading() {
  return (
    <div className="grid h-full grid-cols-9 grid-rows-6 gap-6">
      <Skeleton className="col-span-6 row-span-6 h-[750px]" />
      <Skeleton className="col-span-3 row-span-3 h-[360px]" />
      <Skeleton className="col-span-3 row-span-3 h-[360px]" />
    </div>
  );
}
