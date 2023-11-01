const staticUrl = import.meta.env.VITE_BACKEND_STATIC_URL;

export function getStaticUrl(path: string): string {
  return `${staticUrl}/${path}`;
}

export function fileTypeBasedOnExtension(path: string): string {
  const extension = path.split(".").pop();
  switch (extension) {
    case "mp4":
      return "video";
    case "avi":
      return "video";
    case "mov":
      return "video";
    case "wmv":
      return "video";
    case "mkv":
      return "video";
    case "jpg":
      return "image";
    case "jpeg":
      return "image";
    case "png":
      return "image";
    case "gif":
      return "image";
    case "webp":
      return "image";
    case "svg":
      return "image";
    case "mp3":
      return "audio";
    case "wav":
      return "audio";
    case "ogg":
      return "audio";
    case "flac":
      return "audio";
    case "aac":
      return "audio";
    case "m4a":
      return "audio";
    case "opus":
      return "audio";
    case "webm":
      return "audio";
    case "pdf":
      return "document";
    case "doc":
      return "document";
    case "docx":
      return "document";
    case "xls":
      return "document";
    case "xlsx":
      return "document";
    case "ppt":
      return "document";
    case "pptx":
      return "document";
    default:
      return "unknown";
  }
}
export async function fetchFileFromServer(filePath: string): Promise<File> {
  const response = await fetch(filePath);
  const filename = filePath.split("/").pop() as string;
  const blob = await response.blob();
  const file = new File([blob], filename);
  return file;
}
