export default function NotFound() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-white to-indigo-100 px-4">
      <div className="text-center p-10 bg-white/80 backdrop-blur-md border border-indigo-200 shadow-2xl rounded-2xl max-w-md">
        <h1 className="text-[6rem] font-extrabold text-indigo-700 tracking-widest drop-shadow-lg">
          404
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <a
          href="/"
          className="inline-block rounded-full bg-indigo-600 px-6 py-3 text-white font-semibold shadow-md hover:bg-indigo-700 transition-all"
        >
          Take Me Home
        </a>
      </div>
    </div>
  );
}
