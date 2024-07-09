import Link from "next/link"
import ButtonSkript from "../components/ui/buttonSkript"

const showcase = () => {
  return (
    <div id="inicio" className="flex flex-col mt-11">
        <div id="showcase" className="flex flex-col justify-center items-center max-[630px]:width">
            <iframe className="max-[440px]:w-[300px] max-[440px]:h-200px max-[630px]:w-[400px] max-[630px]:h-[270px]" width="560" height="315" src="https://www.youtube.com/embed/V34YpRvDOFA?si=l05AWo-jn2OXDaFD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <Link href="https://www.youtube.com/watch?v=V34YpRvDOFA">
                <button className="mt-11 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-violet-600 px-6 font-medium text-neutral-200"><span>Showcase</span><div className="ml-1 transition group-hover:translate-x-1"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button>
            </Link>
        </div>
    </div>
  )
}

export default showcase