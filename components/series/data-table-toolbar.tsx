"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DataTableViewOptions } from "./data-table-view-options";

import {
  languages,
  genres,
  stories,
  platforms,
  ratings,
  progresses,
  types,
} from "./data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search..."
          value={(table.getColumn("Name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("Name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
        {table.getColumn("Progress") && (
          <DataTableFacetedFilter
            column={table.getColumn("Progress")}
            title="Progress"
            options={progresses}
          />
        )}
        {table.getColumn("Language") && (
          <DataTableFacetedFilter
            column={table.getColumn("Language")}
            title="Languages"
            options={languages}
          />
        )}
        {table.getColumn("Genre") && (
          <DataTableFacetedFilter
            column={table.getColumn("Genre")}
            title="Genres"
            options={genres}
          />
        )}
        {table.getColumn("Platform") && (
          <DataTableFacetedFilter
            column={table.getColumn("Platform")}
            title="Platforms"
            options={platforms}
          />
        )}
        {table.getColumn("Type") && (
          <DataTableFacetedFilter
            column={table.getColumn("Type")}
            title="Type"
            options={types}
          />
        )}
        {table.getColumn("Story") && (
          <DataTableFacetedFilter
            column={table.getColumn("Story")}
            title="Story"
            options={stories}
          />
        )}
        {table.getColumn("Rating") && (
          <DataTableFacetedFilter
            column={table.getColumn("Rating")}
            title="Rating"
            options={ratings}
          />
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
