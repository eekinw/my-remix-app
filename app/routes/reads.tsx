import { IRead } from "~/lib/interface";
import AddReadingDialog from "~/components/add-reading-dialog";
import { v4 as uuid } from "uuid";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return [
    {
      id: uuid(),
      url: "https://www.google.com",
      has_read: false,
    },
    {
      id: uuid(),
      url: "https://www.bing.com",
      has_read: false,
    },
  ];
};

export default function Reads() {
  const readingList: IRead[] = useLoaderData<typeof loader>();
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 mt-2">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">My Reads</h2>
          {readingList.length === 0 ? (
            <div>
              There are no readings here. Click <AddReadingDialog /> to add one.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {readingList.map((read) => (
                <div
                  key={read.id}
                  className="p-4 border rounded-lg shadow-sm  hover:shadow-md transition-shadow"
                >
                  <div className="truncate">
                    <h3 className="text-lg font-semibold">{read.url}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
