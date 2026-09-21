/** Generated abstract UI preview — swap for real screenshots via an <img> later. */
export default function Preview({ hue, large = false }: { hue: number; large?: boolean }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl" style={{ background: `linear-gradient(135deg, hsl(${hue} 70% 22%), hsl(${hue + 50} 80% 8%))` }}>
      <div className="absolute inset-[8%] flex flex-col gap-2 rounded-lg border border-white/10 bg-black/30 p-3 backdrop-blur-sm">
        <div className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-white/30" /><i className="h-2 w-2 rounded-full bg-white/20" /><i className="h-2 w-2 rounded-full bg-white/10" /></div>
        <div className="h-3 w-2/5 rounded bg-white/25" />
        <div className="h-2 w-3/4 rounded bg-white/10" />
        <div className={`mt-auto grid gap-2 ${large ? 'grid-cols-4' : 'grid-cols-3'}`}>
          {Array.from({ length: large ? 4 : 3 }, (_, i) => <div key={i} className="h-8 rounded" style={{ background: `hsl(${hue + i * 25} 80% 60% / .35)` }} />)}
        </div>
      </div>
    </div>
  )
}
