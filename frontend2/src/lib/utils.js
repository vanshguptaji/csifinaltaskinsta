import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const readFileAsDataURL = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error("No file provided."));
      return;
    }

    const reader = new FileReader();

    // File successfully read
    reader.onloadend = () => {
      if (reader.result && typeof reader.result === 'string') {
        resolve(reader.result); // Resolve with the Base64 Data URL
      } else {
        reject(new Error("File could not be processed as a Data URL."));
      }
    };

    // Handle errors during file reading
    reader.onerror = () => {
      reject(new Error("Failed to read the file."));
    };

    // Start reading the file as a Data URL
    reader.readAsDataURL(file);
  });
};
