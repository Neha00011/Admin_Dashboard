import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import IndianTime from "@/components/CurrentTime";

function CalendarPage() {
  const [date, setDate] = React.useState(new Date());

  return (
    <div className="flex flex-col h-screen">
      <header className="sticky top-0 z-30 flex items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="#">Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="#">Calendar</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="relative ml-auto flex-1 md:grow-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div>
      </header>
      <div className="p-6">
        {/* Page Header */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Calendar</h1>
          <p className="text-gray-600">Manage your events and schedules</p>
        </header>

        {/* Filter Section */}
        <section className="mb-6">
          <div className="flex items-center space-x-4">
            <div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="View Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>View Type</SelectLabel>
                    <SelectItem value="apple">Month</SelectItem>
                    <SelectItem value="banana">Week</SelectItem>
                    <SelectItem value="blueberry">Day</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Summary of Key Dates */}
        <section className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Today's Date</CardTitle>
            </CardHeader>
            <CardContent>{date.toLocaleDateString()}</CardContent>
          </Card>

          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Today's Events</CardTitle>
            </CardHeader>
            <CardContent>Meeting with Team</CardContent>
            <CardFooter>{date.toLocaleDateString()}</CardFooter>
          </Card>

          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>
                Task Due <span className="text-red-500">Today</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Project Deadline</p>
            </CardContent>
            <CardFooter>
              <div>
                <p>Current Time : </p> <IndianTime />
                <p>Deadline 8 p.m</p>
              </div>
            </CardFooter>
          </Card>
        </section>
        <div className="flex flex-wrap sm:flex-row justify-center items-start gap-10 p-6">
          {/* Calendar Section */}
          <main className="grid gap-6">
            <div className="flex justify-center items-center h-full">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border border-gray-200 shadow-lg p-4"
              />
            </div>
          </main>

          {/* Upcoming Events Section */}
          <Card className="w-80">
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                <li className="mb-3">
                  <h3 className="text-lg font-semibold">
                    Interns Onboarding Session
                  </h3>
                  <p className="text-gray-500">June 24, 2024 - 02:00 PM</p>
                </li>
                <li className="mb-3">
                  <h3 className="text-lg font-semibold">Client Presentation</h3>
                  <p className="text-gray-500">June 26, 2024 - 11:59 PM</p>
                </li>
                <li className="mb-3">
                  <h3 className="text-lg font-semibold">Group Discussion</h3>
                  <p className="text-gray-500">July 1, 2024 - 06:00 PM</p>
                </li>
                <li>
                  <h3 className="text-lg font-semibold">
                    Project Kickoff Meeting
                  </h3>
                  <p className="text-gray-500">July 5, 2024 - 07:00 PM</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Key Dates Section */}

          <Card className="w-80">
            <CardHeader>
              <CardTitle>Key Dates</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                <li className="mb-3">
                  <h3 className="text-lg font-semibold">
                    New Product Launch Event
                  </h3>
                  <p className="text-gray-500">July 2, 2024</p>
                </li>
                <li className="mb-3">
                  <h3 className="text-lg font-semibold">
                    New Team Member Orientation
                  </h3>
                  <p className="text-gray-500">July 16, 2024</p>
                </li>
                <li>
                  <h3 className="text-lg font-semibold">
                    Quarterly Business Review
                  </h3>
                  <p className="text-gray-500">August 10, 2024</p>
                </li>
                <li>
                  <h3 className="text-lg font-semibold">Annual Conference</h3>
                  <p className="text-gray-500">September 5, 2024</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CalendarPage;
