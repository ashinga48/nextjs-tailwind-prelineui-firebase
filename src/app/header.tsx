'use client'

export const Header = () => {
  return <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 px-4 max-w-[85rem] sm:px-6 lg:px-8 mx-auto">
      <nav className="max-w-[85rem] w-full mx-auto flex flex-wrap basis-full items-center justify-between" aria-label="Global">
        <a className="sm:order-1 flex-none text-xl font-semibold" href="#">Brand</a>
        <div className="sm:order-3 flex items-center gap-x-2">
          <button type="button" className=" text-gray-500 hover:text-gray-600" data-hs-overlay="#docs-sidebar" aria-controls="docs-sidebar" aria-label="Toggle navigation">
            <span className="sr-only">Toggle Navigation</span>
            <svg className="flex-shrink-0 size-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </button>
        </div>
      </nav>
  </header>
}