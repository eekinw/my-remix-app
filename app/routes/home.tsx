import { Link } from "@remix-run/react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Welcome to My Remix App</h1>
          <p className="mt-2 text-lg">Your go-to app for everything awesome!</p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-700">
            We are dedicated to making your life easier by providing amazing
            features and a seamless user experience. Explore our app to learn
            more.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <nav>
            <ul className="space-y-4">
              <li>
                <Link to="/dashboard" className="text-blue-600 hover:underline">
                  Go to Dashboard
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-blue-600 hover:underline">
                  Explore Features
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-600 hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}
