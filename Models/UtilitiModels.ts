// Copyright 2024 selvinkamal
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and

import { HTMLMotionProps } from "framer-motion";
import { HTMLAttributes, ReactHTML } from "react";
import { FileRejection } from "react-dropzone";

// limitations under the License.
export type TSvgAnimatedWrapper<T extends keyof ReactHTML> = Omit<
  HTMLMotionProps<T>,
  "style"
> & {
  containerStyle?: React.CSSProperties;
};

export type TSvgWrapper<T extends HTMLElement> = Omit<
  HTMLAttributes<T>,
  "style"
> & {
  containerStyle?: React.CSSProperties;
};
export interface IFolderUploadDetails {
  folderName: string;
  files: File[];
  filesError?: FileRejection[];
  isNestedFolder?: boolean;
}
export type TAllowedFileType = {
  mimePrefix: string;
  extensions: string[];
};
export const Doxle_Allowed_Types: TAllowedFileType[] = [
  {
    mimePrefix: "image/",
    extensions: [".png", ".jpg", ".jpeg", ".bmp", ".webp"],
  },
  {
    mimePrefix: "application/",
    extensions: [
      ".pdf",
      ".xls",
      ".xlsx",
      ".doc",
      ".docx",
      ".ppt",
      ".pptx",
      ".zip",
    ],
  },
  { mimePrefix: "text/", extensions: [".txt", ".csv", ".rtf"] },
  { mimePrefix: "video/", extensions: [".mp4", ".mpeg", ".mov"] },
];
