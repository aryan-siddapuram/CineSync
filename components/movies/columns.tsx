"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "../ui/badge";
import { Checkbox } from "../ui/checkbox";
import { CheckCircle, CircleSlash2, Clock12 } from "lucide-react"

import {
  stories,
  languages,
  genres,
  progresses,
  platforms,
  ratings,
  types,
} from "./data/data";
import { Movie } from "./data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { platform_images } from "./images/platform-images";
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

export const columns: ColumnDef<Movie>[] = [
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
      else if(platform.label=="Sony LIV"){
        image_url="https://play-lh.googleusercontent.com/4VsxQM_JpvxB-qlQaVmYiZMZd9YCUs6AIxUfKADL9iZF-sl2Cmz3vjBebtlV0KI2DNs"
      }
      else if(platform.label=="Zee5"){
        image_url="https://play-lh.googleusercontent.com/ElH_LEMzUtOJNweZBZ1QAZZDHzxgSja6DKYCevqihEYWGHLM6eFIP1JDYR25QRbF1w"
      }
      else if(platform.label=="aha"){
        image_url="https://play-lh.googleusercontent.com/UiUbpQjyTs24NtBNPF7nt2QiZeR49C7HQOjqnf8Tovaa535uO9zyNOgx56xg9rJYbw"
      }
      else if(platform.label=="JioCinema"){
        image_url="https://play-lh.googleusercontent.com/xn0i77gUK5YfpBZlyuozEL8rThZc6FkX0ozZjVyogstEg7xUtrUdIDPuiwZWsQ9MjA"
      }
      else if(platform.label=="Apple TV"){
        image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwcm5QoSAJ05Ww7zRRbFcKBMtgoPN3a75iZOWfrl-pw&s"
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
    accessorKey: "Type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    cell: ({ row }) => {
      const type = types.find((type) => type.value === row.getValue("Type"));

      if (!type) {
        return null;
      }

      return (
        <div className="flex items-center">
          <span>{type.label}</span>
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
    accessorKey: "Story",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Story" />
    ),
    cell: ({ row }) => {
      const story = stories.find(
        (story) => story.value === row.getValue("Story")
      );

      if (!story) {
        return null;
      }

      return (
        <div className="flex items-center">
          <span>{story.label}</span>
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
    accessorKey: "Duration",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Duration" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
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
      let progress_icon = <Clock12 className="h-5" style={{color:"blue"}}/>
      if(progress.label=="Completed"){
        progress_icon = <CheckCircle className="h-5" style={{color:"#52BE80"}}/>
      }
      else if(progress.label=="Not Started"){
        progress_icon = <CircleSlash2 className="h-5" style={{color:"#EC7063"}}/>
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
