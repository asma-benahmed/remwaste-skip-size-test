export default function NotFound() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-900 tracking-widest">
          404
        </h1>
        <p className="text-gray-500 text-lg">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <a
          href="/"
          className="mt-6 inline-block rounded bg-indigo-600 px-6 py-2 text-white font-medium hover:bg-indigo-700 transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
