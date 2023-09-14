"use client";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { addVideoMetadata } from "@/redux/slices/youtubeVideo";
import { cn } from "@/lib/utils";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button, buttonVariants } from "@/components/ui/button";
import { IconPlus, IconCheck, IconCopy } from "@/components/ui/icons";

type SuggestedTextProps = {
  text: string;
};

export const SuggestedText = ({ text }: SuggestedTextProps) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 });
  const dispatch = useAppDispatch();
  const { title, desc, privacy } = useAppSelector(
    (state) => state.youtubeVideo
  );

  const onCopy = () => {
    if (isCopied) return;
    copyToClipboard(text);
  };
  return (
    <div className="flex justify-between bg-primary-foreground rounded-md p-5 border-primary">
      <p className="flex-1">{text}</p>
      <div className="flex w-20">
        <Button
          variant="ghost"
          size="icon"
          className="text-xs"
          onClick={onCopy}
        >
          {isCopied ? <IconCheck /> : <IconCopy />}
          <span className="sr-only">Copy code</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <IconPlus />
              <span className="sr-only">Add</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={(e) => {
                e.preventDefault();
                dispatch(
                  addVideoMetadata({
                    title: text,
                    desc: desc,
                    privacy: privacy,
                  })
                );
              }}
            >
              Add to title
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(e) => {
                e.preventDefault();
                dispatch(
                  addVideoMetadata({
                    title: title,
                    desc: text,
                    privacy: privacy,
                  })
                );
              }}
            >
              Add to description
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
