import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "~/components/ui/dialog";
import { Form, useActionData } from "@remix-run/react";

export default function AddReadingDialog() {
  const actionData = useActionData<{ error?: string }>();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-blue-600">here</button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a New Reading</DialogTitle>
          <DialogDescription>Choose your format</DialogDescription>
        </DialogHeader>
        <Form method="post">
          <div className="mb-4">
            <label htmlFor="url" className="block text-sm font-medium">
              Insert URL here
            </label>
            <input
              id="url"
              name="url"
              type="text"
              className="mt-1 block w-full border rounded-md shadow-sm"
            />
          </div>
          {actionData?.error && (
            <p className="text-red-500 text-sm">{actionData.error}</p>
          )}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Add Reading
            </button>
          </div>
        </Form>
        <DialogClose className="absolute top-4 right-4">
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
