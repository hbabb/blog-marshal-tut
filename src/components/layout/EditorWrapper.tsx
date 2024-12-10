"use client";

import {
  EditorCommand,
  EditorCommandEmpty,
  EditorCommandItem,
  EditorCommandList,
  EditorContent,
  EditorRoot,
  type JSONContent,
} from "novel";
import { defaultExtensions } from "@/lib/utils/extensions";
import { slashCommand, suggestionItems } from "@/lib/utils/SlashCommand";
import { handleCommandNavigation } from "novel/extensions";

interface EditorProps {
  initialValue?: JSONContent;
  onChange: (value: JSONContent) => void;
}

const extensions = [...defaultExtensions, slashCommand];

export const TailwindEditor = ({ onChange, initialValue }: EditorProps) => {
  return (
    <EditorRoot>
      <EditorContent
        className="min-h-64 rounded-lg border p-4"
        editorProps={{
          handleDOMEvents: {
            keydown: (_view, event) => handleCommandNavigation(event),
          },
          attributes: {
            class:
              "prose prose-lg dark:prose-invert prose-headings:font-title font default focus:outline-none max-w-full",
          },
        }}
        immediatelyRender={false}
        extensions={extensions}
        initialContent={initialValue}
        onUpdate={({ editor }) => {
          const json = editor.getJSON();
          onChange(json);
        }}
      >
        <EditorCommand className="z-50 h-auto max-h-[330px] w-72 overflow-y-auto rounded-md border border-muted bg-background px-1 py-2 shadow-md transition-all">
          <EditorCommandEmpty className="px-2 text-muted-foreground">No results</EditorCommandEmpty>
          <EditorCommandList>
            {suggestionItems.map((item) => (
              <EditorCommandItem
                value={item.title}
                onCommand={(val) => item.command?.(val)}
                className={
                  "flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm hover:bg-accent aria-selected:bg-accent"
                }
                key={item.title}
              >
                <div className="flex h-19 w-10 items-center justify-center rounded-md border border-muted bg-background">
                  {item.icon}
                </div>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-muted-foreground text-xs">{item.description}</p>
                </div>
              </EditorCommandItem>
            ))}
          </EditorCommandList>
        </EditorCommand>
      </EditorContent>
    </EditorRoot>
  );
};
