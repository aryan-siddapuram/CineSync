"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "../ui/badge";
import { Checkbox } from "../ui/checkbox";
import { CheckCircle, CircleSlash2, Clock12, CalendarCheck } from "lucide-react"

import {
  languages,
  genres,
  progresses,
  platforms,
  ratings,
} from "./data/data";
import { Anime } from "./data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const formatDate=(inputDate:any)=>{
  // Split the input string into day, month, and year
  const [day, month, year] = inputDate.split('/');

  // Get the month name
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const monthName = monthNames[(parseInt(month))-1];

  // Format the final string
  const result = `${day} ${monthName} ${year}`;

  return result;
}

export const columns: ColumnDef<Anime>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "Name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("Name")}
          </span>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "Genre",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Genre" />
    ),
    cell: ({ row }) => {
      const genre = genres.find(
        (genre) => genre.value === row.getValue("Genre")
      );
      if (!genre) {
        return null;
      }
      let bg_color = "";
      if(genre.label=="Action"){
        bg_color="#EC7063"
      }
      else if(genre.label=="Adventure"){
        bg_color="#DC7633"
      }
      else if(genre.label=="Comedy"){
        bg_color="#EB984E"
      }
      else if(genre.label=="Drama"){
        bg_color="#5499C7"
      }
      else if(genre.label=="Documentary"){
        bg_color="#5DADE2"
      }
      else if(genre.label=="Horror"){
        bg_color="#48C9B0"
      }
      else if(genre.label=="Thriller"){
        bg_color="#45B39D"
      }
      else if(genre.label=="Romance"){
        bg_color="#52BE80"
      }
      else if(genre.label=="Crime"){
        bg_color="#F4D03F"
      }
      else if(genre.label=="Fantasy"){
        bg_color="#F5B041"
      }
      else if(genre.label=="Animation"){
        bg_color="#AAB7B8"
      }
      else if(genre.label=="Science Fiction"){
        bg_color="#5D6D7E"
      }
      else if(genre.label=="Mystery"){
        bg_color="#A569BD"
      }
      else if(genre.label=="Super Hero"){
        bg_color="#AF7AC5"
      }
      else if(genre.label=="Sports"){
        bg_color="#AF7AC5"
      }
      else if(genre.label=="Shonen"){
        bg_color="#F8C471"
      }
      else if(genre.label=="Isekai"){
        bg_color="#BB8FCE"
      }
      else if(genre.label=="Slice of life"){
        bg_color="#85C1E9"
      }
      else if(genre.label=="Harem"){
        bg_color="#F1948A"
      }
      else if(genre.label=="Ecchi"){
        bg_color="#D98880"
      }
      return (
        <div className="flex items-center">
          <Badge style={{backgroundColor:bg_color}}>{genre.label}</Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "Language",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Language" />
    ),
    cell: ({ row }) => {
      const language = languages.find(
        (language) => language.value === row.getValue("Language")
      );

      if (!language) {
        return null;
      }

      return (
        <div className="flex w-[50px] items-center">
          <Badge variant="outline">{language.label}</Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "Platform",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Platform" />
    ),
    cell: ({ row }) => {
      const platform = platforms.find(
        (platform) => platform.value === row.getValue("Platform")
      );

      if (!platform) {
        return null;
      }
      let image_url = "";
      if(platform.label=="Netflix"){
        image_url="https://assets.materialup.com/uploads/d263ad53-2923-4168-8d58-18656ff62d1d/preview.jpg"
      }
      else if(platform.label=="Amazon Prime Video"){
        image_url="https://sm.ign.com/ign_in/cover/p/prime-vide/prime-video_bpe3.jpg"
      }
      else if(platform.label=="Hotstar"){
        image_url="https://play-lh.googleusercontent.com/0w46WqA_Ofs5bL-mT-dm40PGfxRfRYhZ2R1OC1FiDbK502mhxAj5-r9_nXNs0SFakRA"
      }
      else if(platform.label=="Zoro"){
        image_url="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/3b/bb/34/3bbb3467-416b-3a2c-a1ba-43e93d70de65/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg"
      }

      return (
        <div className="flex items-center">
          {/* <span>{platform.label}</span> */}
          <Avatar>
            <AvatarImage
              src={image_url}
              alt={platform.label}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "Season",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Seasons" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="font-medium">
            {row.getValue("Season")}
          </span>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "Duration",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Duration (ep.)" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="font-medium">
            {row.getValue("Duration")}
          </span>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "Release",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Release" />
    ),
    cell: ({ row }) => {
      const release_date = row.getValue("Release");
      const converted_date = formatDate(release_date)
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {converted_date}
          </span>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "Progress",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Progress" />
    ),
    cell: ({ row }) => {
      const progress = progresses.find(
        (progress) => progress.value === row.getValue("Progress")
      );

      if (!progress) {
        return null;
      }
      let progress_icon = <Clock12 className="h-5" style={{color:"#5499C7"}}/>
      if(progress.label=="Completed"){
        progress_icon = <CheckCircle className="h-5" style={{color:"#52BE80"}}/>
      }
      else if(progress.label=="Not Started"){
        progress_icon = <CircleSlash2 className="h-5" style={{color:"#EC7063"}}/>
      }
      else if(progress.label=="Upto Date"){
        progress_icon = <CalendarCheck className="h-5" style={{color:"#AF7AC5"}}/>        
      }
      return (
        <div className="flex items-center gap-3">
          {progress_icon}
          <span>{progress.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "Rating",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Rating" />
    ),
    cell: ({ row }) => {
      const rating = ratings.find(
        (rating) => rating.value === row.getValue("Rating")
      );

      if (!rating) {
        return null;
      }

      return (
        <div className="flex items-center">
          <span>{rating.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
    enableHiding: true,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
