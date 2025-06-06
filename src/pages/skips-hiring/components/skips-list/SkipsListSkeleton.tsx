export const SkipsListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 px-12">
      {Array.from({ length: 4 }).map((_, index: number) => (
        <div
          key={index}
          className="bg-white rounded-3xl p-8 h-full shadow-lg border-2 border-gray-100 animate-pulse"
        >
          <div className="text-center mb-8">
            <div className="h-6 w-2/3 mx-auto bg-gray-200 rounded mb-2" />
            <div className="h-4 w-1/2 mx-auto bg-gray-200 rounded" />
          </div>

          <div className="text-center mb-8">
            <div className="h-10 w-1/2 mx-auto bg-gray-200 rounded mb-2" />
            <div className="h-4 w-3/4 mx-auto bg-gray-200 rounded mb-2" />
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 bg-gray-200 rounded-full" />
              <div className="h-4 w-1/3 bg-gray-200 rounded" />
            </div>
          </div>

          <div className="w-full h-12 bg-gray-200 rounded-2xl" />
        </div>
      ))}
    </div>
  );
};
