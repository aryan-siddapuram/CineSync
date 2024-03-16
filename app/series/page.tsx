import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"

import { DataTable } from "@/components/series/data-table"
import { columns } from "@/components/series/columns"
import { seriesSchema } from "@/components/series/data/schema"
import { google } from 'googleapis';

export const metadata: Metadata = {
  title: "CineSync - Series",
  description: "My Series Data.",
}

async function getSeries() {
  const auth = new google.auth.GoogleAuth({
    keyFile: "./seriescredentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();

  const googlesheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "Insert your series sheet ID";

  try {
    await new Promise(resolve =>setTimeout(resolve, 1000));
    const response = await googlesheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range:"Series!B:K"
    });

    const rows =  response.data.values;
    if (rows?.length) {
      const header = rows[0];
      const jsonData = [];

      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const entry: Record<string, any> = {};

        for (let j = 0; j < header.length; j++) {
          entry[header[j]] = row[j];
        }
        jsonData.push(entry);
      }
      console.log(jsonData)
      const result = z.array(seriesSchema).parse(jsonData)
      return result.reverse();
    } else {
      console.log('No data found.');
    }
  } catch (err) {
    console.error('The API returned an error:',err);
  }
}

export default async function SeriesPage() {
  const tasks = await getSeries()

  return (
      <div className="hidden h-full flex-1 flex-col space-y-6 pr-8 pl-8 mt-6 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-4xl font-bold tracking-tight">Series</h2>
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
  )
}