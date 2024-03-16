"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Copy } from "lucide-react";
import { Film, Clapperboard, MonitorPlay, Play } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export default function Links() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex gap-10 mt-12 pt-12">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle style={{ color: "#C0392B" }}>Movies</CardTitle>
                <CardDescription className="text-xs mt-1">
                  All the resource links to movies.
                </CardDescription>
              </div>
              <div>
                <Film style={{ color: "#C0392B" }} />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <p className="w-[100px]">Edit :</p>
              <Input
                value="Insert your movie form edit link here"
                readOnly
              />
              <Button variant="secondary" className="shrink-0" onClick={() => {
                  navigator.clipboard.writeText(
                    "Insert your movie form edit link here"
                  );
                }}>
                <Copy className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center mt-5 gap-3">
              <p className="w-[100px]">Share :</p>
              <Input
                value="Insert your movie form link here"
                readOnly
              />
              <Button
                variant="secondary"
                className="shrink-0"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "Insert your movie form link here"
                  );
                }}
              >
                <Copy className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center mt-5 gap-3">
              <p className="w-[100px]">Sheet :</p>
              <Input
                value="Insert your movie sheet link here"
                readOnly
              />
              <Button variant="secondary" className="shrink-0" onClick={() => {
                  navigator.clipboard.writeText(
                    "Insert your movie sheet link here"
                  );
                }}>
                <Copy className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle style={{ color: "#F1C40F" }}>Series</CardTitle>
                <CardDescription className="text-xs mt-1">
                  All the resource links to series.
                </CardDescription>
              </div>
              <div>
                <Clapperboard style={{ color: "#F1C40F" }} />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <p className="w-[100px]">Edit :</p>
              <Input
                value="Insert your series form edit link here"
                readOnly
              />
              <Button variant="secondary" className="shrink-0" onClick={() => {
                  navigator.clipboard.writeText(
                    "Insert your series form edit link here"
                  );
                }}>
                <Copy className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center mt-5 gap-3">
              <p className="w-[100px]">Share :</p>
              <Input
                value="Insert your series form link here"
                readOnly
              />
              <Button variant="secondary" className="shrink-0" onClick={() => {
                  navigator.clipboard.writeText(
                    "Insert your series form link here"
                  );
                }}>
                <Copy className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center mt-5 gap-3">
              <p className="w-[100px]">Sheet :</p>
              <Input
                value="Insert your series sheet link here"
                readOnly
              />
              <Button variant="secondary" className="shrink-0" onClick={() => {
                  navigator.clipboard.writeText(
                    "Insert your series sheet link here"
                  );
                }}>
                <Copy className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex gap-10">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle style={{ color: "#2ECC71" }}>Anime</CardTitle>
                <CardDescription className="text-xs mt-1">
                  All the resource links to a anime.
                </CardDescription>
              </div>
              <div>
                <MonitorPlay style={{ color: "#2ECC71" }} />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <p className="w-[100px]">Edit :</p>
              <Input
                value="Insert your anime form edit link here"
                readOnly
              />
              <Button variant="secondary" className="shrink-0" onClick={() => {
                  navigator.clipboard.writeText(
                    "Insert your anime form edit link here"
                  );
                }}>
                <Copy className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center mt-5 gap-3">
              <p className="w-[100px]">Share :</p>
              <Input
                value="Insert your anime form link here"
                readOnly
              />
              <Button variant="secondary" className="shrink-0" onClick={() => {
                  navigator.clipboard.writeText(
                    "Insert your anime form link here"
                  );
                }}>
                <Copy className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center mt-5 gap-3">
              <p className="w-[100px]">Sheet :</p>
              <Input
                value="Insert your anime sheet link here"
                readOnly
              />
              <Button variant="secondary" className="shrink-0" onClick={() => {
                  navigator.clipboard.writeText(
                    "Insert your anime sheet link here"
                  );
                }}>
                <Copy className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle style={{ color: "#8E44AD" }}>
                  Recommendations
                </CardTitle>
                <CardDescription className="text-xs mt-1">
                  All the resource links to recommendations.
                </CardDescription>
              </div>
              <div>
                <Play style={{ color: "#8E44AD" }} />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <p className="w-[100px]">Edit :</p>
              <Input value="Insert your recommendations form edit link here" readOnly />
              <Button variant="secondary" className="shrink-0" onClick={() => {
                  navigator.clipboard.writeText(
                    "Insert your recommendations form edit link here"
                  );
                }}>
                <Copy className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center mt-5 gap-3">
              <p className="w-[100px]">Share :</p>
              <Input value="Insert your recommendations form link here" readOnly />
              <Button variant="secondary" className="shrink-0" onClick={() => {
                  navigator.clipboard.writeText(
                    "Insert your recommendations form link here"
                  );
                }}>
                <Copy className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center mt-5 gap-3">
              <p className="w-[100px]">Sheet :</p>
              <Input value="Insert your recommendations sheet link here" readOnly />
              <Button variant="secondary" className="shrink-0" onClick={() => {
                  navigator.clipboard.writeText(
                    "Insert your recommendations sheet link here"
                  );
                }}>
                <Copy className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
