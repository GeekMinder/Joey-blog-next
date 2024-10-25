"use client";

import { useEffect, useRef } from "react";
import Cherry from "cherry-markdown";
import { CherryOptions } from "cherry-markdown/types/cherry";
import "cherry-markdown/dist/cherry-markdown.css";
import { useTheme } from "next-themes";

export default function CherryMarkdown({
  markdownValue,
}: {
  markdownValue: string;
}) {
  const { theme, systemTheme } = useTheme();
  const editorRef = useRef<HTMLDivElement>();
  const cherryRef = useRef<Cherry | null>(null);
  useEffect(() => {
    if (cherryRef.current == null) {
      // 初始化编辑器
      const config: CherryOptions = {
        el: editorRef.current,
        value: markdownValue || "",
        editor: {
          defaultModel: "previewOnly",
        },
        themeSettings: {
          themeList: [
            { className: "default", label: "默认" },
            { className: "dark", label: "黑" },
            { className: "light", label: "白" },
          ],
          mainTheme: "light",
          codeBlockTheme: "default",
          inlineCodeTheme: "red",
          toolbarTheme: "light",
        },
        toolbars: {
          toc: {
            updateLocationHash: false,
            defaultModel: "full",
            position: "fixed",
            cssText: "right: 20px",
          },
        },
      };
      const editor = new Cherry(config);
      cherryRef.current = editor;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markdownValue, theme]);

  useEffect(() => {
    cherryRef.current?.setTheme(theme === "system" ? systemTheme : theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return (
    <div className="">
      <div
        ref={editorRef as React.RefObject<HTMLDivElement>}
        id="markdown-container"
      />
    </div>
  );
}
