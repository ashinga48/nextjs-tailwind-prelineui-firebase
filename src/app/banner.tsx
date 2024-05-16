'use client'

export const Banner = () => {
    return (<div className="bg-gradient-to-r from-red-500 via-purple-400 to-blue-500">
    <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
        <div className="text-center md:text-start">
          <p className="text-xs text-white/80 uppercase tracking-wider">
            new product
          </p>
          <p className="mt-1 text-white font-medium">
            hurry up
          </p>
        </div>
  
      </div>
    </div>
  </div>)
}