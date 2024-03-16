"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const ori_username = "aryan";
  const ori_password = "cinesync";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [username_error, setUsername_error] = useState("");
  const [password_error, setPassword_error] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (ori_username === username && ori_password === password) {
      setUsername_error("");
      setPassword_error("");
      router.push('/links');
    } else if (ori_username !== username) {
      setUsername_error("Incorrect username");
    } else {
      setUsername_error("");
      setPassword_error("Incorrect password");
    }
  };
  return (
    <div className="flex items-center justify-center mt-12 pt-12">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your credentials below
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="username" onChange={(event)=>{setUsername(event.target.value)}}/>
            {username_error?<p style={{color:"red"}}>{username_error}</p>:""}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" onChange={(event)=>{setPassword(event.target.value)}}/>
            {password_error?<p style={{color:"red"}}>{password_error}</p>:""}
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline">
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline">
              <Icons.google className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit" onClick={handleSubmit}>Login</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
