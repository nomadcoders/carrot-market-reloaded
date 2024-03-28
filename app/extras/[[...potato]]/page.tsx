export default function Extras({ params }: { params: { potato: string[] } }) {
  console.log(params);
  return (
    <div className="flex flex-col gap-3 py-10">
      <h1 className="text-6xl font-metallica">Extras!</h1>
      <h2 className="font-roboto">So much more to learn!</h2>
    </div>
  );
}
