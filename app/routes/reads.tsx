import { IRead } from "~/lib/interface";
import AddReadingDialog from "~/components/add-reading-dialog";
import { useLoaderData } from "@remix-run/react";
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

export const loader = async () => {
  try {
    const readings = await prisma.reading.findMany();
    return readings;
  } catch (error) {
    console.error("Error fetching readings:", error);
    throw new Response("Failed to load readings", { status: 500 });
  }
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
                  className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{read.title}</h3>
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
