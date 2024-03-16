import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MainNav } from "@/components/navbar/main-nav";
import { Languages } from "@/components/dashboard/languages";
import { Genres } from "@/components/dashboard/genres";
import { google } from "googleapis";
import { promises as fs } from "fs";
import path from "path";
import { movieSchema } from "@/components/movies/data/schema";
import { z } from "zod";
import { Film, Clapperboard, MonitorPlay, Play } from "lucide-react";

export const metadata: Metadata = {
  title: "CineSync",
  description: "A task and issue tracker build using Tanstack Table.",
};

let languages = [
  { name: "English", total: 0 },
  { name: "Hindi", total: 0 },
  { name: "Telugu", total: 0 },
  { name: "Kannada", total: 0 },
  { name: "Japanese", total: 0 },
  { name: "Tamil", total: 0 },
  { name: "Malayalam", total: 0 },
  { name: "Korean", total: 0 },
  { name: "Chinese", total: 0 },
];

let genres = [
  { name: "Action", value: 0, fill: "#EC7063" },
  { name: "Adventure", value: 0, fill: "#DC7633" },
  { name: "Comedy", value: 0, fill: "#EB984E" },
  { name: "Drama", value: 0, fill: "#5499C7" },
  { name: "Documentary", value: 0, fill: "#5DADE2" },
  { name: "Horror", value: 0, fill: "#48C9B0" },
  { name: "Thriller", value: 0, fill: "#45B39D" },
  { name: "Romance", value: 0, fill: "#52BE80" },
  { name: "Crime", value: 0, fill: "#F4D03F" },
  { name: "Fantasy", value: 0, fill: "#F5B041" },
  { name: "Animation", value: 0, fill: "#AAB7B8" },
  { name: "Science Fiction", value: 0, fill: "#5D6D7E" },
  { name: "Mystery", value: 0, fill: "#A569BD" },
  { name: "Super Hero", value: 0, fill: "#AF7AC5" },
  { name: "Sports", value: 0, fill: "#AF7AC5" },
  { name: "Shonen", value: 0, fill: "#F8C471" },
  { name: "Isekai", value: 0, fill: "#BB8FCE" },
  { name: "Slice of life", value: 0, fill: "#85C1E9" },
  { name: "Harem", value: 0, fill: "#F1948A" },
  { name: "Ecchi", value: 0, fill: "#D98880" },
];

async function getMovieLength() {
  const data = await fs.readFile(
    path.join(process.cwd(), "components/movies/data/movies.json")
  );
  const movies = JSON.parse(data.toString());
  const auth = new google.auth.GoogleAuth({
    keyFile: "./moviesCredentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();

  const googlesheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "Insert your movie sheet ID";

  try {
    const response = await googlesheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: "Movies!B:L",
    });

    const rows = response.data.values;
    let movies_length = 0;
    if (rows?.length) {
      movies_length = rows?.length - 1;
      for (let i = 1; i < rows.length; i++) {
        const language = rows[i][4]; // Language is at index 4
        const index = languages.findIndex((lang) => lang.name === language);
        if (index !== -1) {
          languages[index].total++;
        }
      }
      for (let i = 1; i < rows.length; i++) {
        const genre = rows[i][5];
        const foundGenre = genres.find((g) => g.name === genre);
        if (foundGenre) {
          foundGenre.value++;
        }
      }
    }

    return movies_length;
  } catch (err) {
    console.error("The API returned an error:", err);
  }
}

async function getSeriesLength() {
  const auth = new google.auth.GoogleAuth({
    keyFile: "./seriescredentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();

  const googlesheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "16xiv-Insert your series sheet ID";

  try {
    const response = await googlesheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: "Series!B:K",
    });

    const rows = response.data.values;
    let series_length = 0;
    if (rows?.length) {
      series_length = rows?.length - 1;
      for (let i = 1; i < rows.length; i++) {
        const language = rows[i][4]; // Language is at index 4
        const index = languages.findIndex((lang) => lang.name === language);
        if (index !== -1) {
          languages[index].total++;
        }
      }
      for (let i = 1; i < rows.length; i++) {
        const genre = rows[i][6];
        const foundGenre = genres.find((g) => g.name === genre);
        if (foundGenre) {
          foundGenre.value++;
        }
      }
    }
    return series_length;
  } catch (err) {
    console.error("The API returned an error:", err);
  }
}

async function getAnimeLength() {
  const auth = new google.auth.GoogleAuth({
    keyFile: "./animecredentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();

  const googlesheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "Insert your anime sheet ID";

  try {
    const response = await googlesheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: "Anime!B:K",
    });

    const rows = response.data.values;
    console.log("anime",rows)
    let anime_length = 0;
    if (rows?.length) {
      anime_length = rows?.length - 1;
      for (let i = 1; i < rows.length; i++) {
        const language = rows[i][4]; // Language is at index 4
        const index = languages.findIndex((lang) => lang.name === language);
        if (index !== -1) {
          languages[index].total++;
        }
      }
      for (let i = 1; i < rows.length; i++) {
        const genre = rows[i][5];
        const foundGenre = genres.find((g) => g.name === genre);
        if (foundGenre) {
          foundGenre.value++;
        }
      }
    }
    return anime_length;
  } catch (err) {
    console.error("The API returned an error:", err);
  }
}

export default async function DashboardPage() {
  const movies_length = await getMovieLength();
  const series_length = await getSeriesLength();
  const anime_length = await getAnimeLength();
  const total = movies_length + series_length + anime_length;
  const barChartData = languages;
  languages = languages.map(language => ({ ...language, total: 0 }));
  const pieChartData = genres;
  genres = genres.map(genre => ({ ...genre, value: 0 }));
  return (
    <div className="hidden flex-col md:flex">
      <div className="flex-1 space-y-4 pt-6 pl-6 pr-6">
        <div className="flex items-center justify-between space-y-2 mb-5">
          <h2 className="text-4xl font-bold tracking-tight">Dashboard</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card
            className="shadow-md shadow-red-500/50"
            style={{ backgroundColor: "#E6B0AA" }}
          >
            <div className="flex items-center justify-between mr-12">
              <div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-secondary">
                    Movies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-secondary">
                    {movies_length}
                  </div>
                </CardContent>
              </div>
              <div>
                <Film className="h-10 w-10" style={{ color: "#C0392B" }} />
              </div>
            </div>
          </Card>
          <Card
            className="shadow-md shadow-amber-500/50"
            style={{ backgroundColor: "#F9E79F" }}
          >
            <div className="flex items-center justify-between mr-12">
              <div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-secondary">
                    Series
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-secondary">
                    {series_length}
                  </div>
                </CardContent>
              </div>
              <div>
                <Clapperboard
                  className="h-10 w-10"
                  style={{ color: "#F1C40F" }}
                />
              </div>
            </div>
          </Card>
          <Card
            className="shadow-md shadow-green-500/50"
            style={{ backgroundColor: "#ABEBC6" }}
          >
            <div className="flex items-center justify-between mr-12">
              <div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-secondary">
                    Anime
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-secondary">
                    {anime_length}
                  </div>
                </CardContent>
              </div>
              <div>
                <MonitorPlay
                  className="h-10 w-10"
                  style={{ color: "#2ECC71" }}
                />
              </div>
            </div>
          </Card>
          <Card
            className="shadow-md shadow-purple-500/50"
            style={{ backgroundColor: "#D2B4DE" }}
          >
            <div className="flex items-center justify-between mr-12">
              <div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-secondary">
                    Total
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-secondary">
                    {total}
                  </div>
                </CardContent>
              </div>
              <div>
                <Play className="h-10 w-10" style={{ color: "#8E44AD" }} />
              </div>
            </div>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Languages</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Languages data={barChartData} />
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Genres</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <Genres data={pieChartData} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
