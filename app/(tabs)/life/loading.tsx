export default function Loading() {
  return (
    <div className="p-5 animate-pulse flex flex-col gap-5">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="*:rounded-md flex gap-5 ">
          <div className="flex flex-col gap-2 *:rounded-md">
            <div className="bg-neutral-700 h-5 w-20" />
            <div className="bg-neutral-700 h-5 w-40" />
            <div className="flex gap-2 *:rounded-md">
              <div className="bg-neutral-700 h-5 w-5" />
              <div className="bg-neutral-700 h-5 w-5" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
