import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Hammer, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SlGraph } from "react-icons/sl";
import { FaChartPie } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import TablesHeader from "@/components/Tables/TableHeader";

function Charts() {
  const lineChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const barChartRef = useRef(null);

  useEffect(() => {
    const createLineChart = () => {
      if (lineChartRef.current) {
        if (lineChartRef.current.chartInstance) {
          lineChartRef.current.chartInstance.destroy();
        }

        lineChartRef.current.chartInstance = new Chart(lineChartRef.current, {
          type: "line",
          data: {
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
            ],
            datasets: [
              {
                label: "Sales",
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    };

    const createPieChart = () => {
      if (pieChartRef.current) {
        if (pieChartRef.current.chartInstance) {
          pieChartRef.current.chartInstance.destroy();
        }

        pieChartRef.current.chartInstance = new Chart(pieChartRef.current, {
          type: "pie",
          data: {
            labels: ["Item A", "Item B", "Item C", "Item D", "Item E"],
            datasets: [
              {
                label: "# of Sales",
                data: [30, 50, 20, 10, 40],
                backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#4BC0C0",
                  "#9966FF",
                ],
              },
            ],
          },
        });
      }
    };

    const createBarChart = () => {
      if (barChartRef.current) {
        if (barChartRef.current.chartInstance) {
          barChartRef.current.chartInstance.destroy();
        }

        barChartRef.current.chartInstance = new Chart(barChartRef.current, {
          type: "bar",
          data: {
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
            ],
            datasets: [
              {
                label: "Profits",
                data: [5000, 4000, 3000, 7000, 2000, 6000, 8000],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                  "rgba(255, 99, 132, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                  "rgba(255, 99, 132, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    };

    createLineChart();
    createPieChart();
    createBarChart();

    return () => {
      if (lineChartRef.current && lineChartRef.current.chartInstance) {
        lineChartRef.current.chartInstance.destroy();
      }
      if (pieChartRef.current && pieChartRef.current.chartInstance) {
        pieChartRef.current.chartInstance.destroy();
      }
      if (barChartRef.current && barChartRef.current.chartInstance) {
        barChartRef.current.chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <TablesHeader />
      <div className="p-6">
        {/* Page Header */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Charts</h1>
          <p className="text-gray-600">
            Overview of various data visualizations
          </p>
        </header>

        {/* Summary Statistics */}
        <section className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="w-full sm:w-[350px]">
            <CardHeader>
              <CardTitle>Total Sales</CardTitle>
            </CardHeader>
            <CardContent>$12,345</CardContent>
          </Card>

          <Card className="w-full sm:w-[350px]">
            <CardHeader>
              <CardTitle>New Users</CardTitle>
            </CardHeader>
            <CardContent>1,234</CardContent>
          </Card>

          <Card className="w-full sm:w-[350px]">
            <CardHeader>
              <CardTitle>Bounce Rate</CardTitle>
            </CardHeader>
            <CardContent>12.34%</CardContent>
          </Card>
        </section>

        <div className="flex flex-col lg:flex-row items-center justify-center mb-6 gap-10">
          <Card className="w-full sm:w-[350px]">
            <CardHeader>
              <CardTitle>Sales</CardTitle>
              <CardDescription>Monthly sales trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 justify-between">
                <Select>
                  <SelectTrigger>
                    <SelectValue>2021</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Year</SelectLabel>
                      <SelectItem>2021</SelectItem>
                      <SelectItem>2020</SelectItem>
                      <SelectItem>2019</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Input
                  type="text"
                  placeholder="Search"
                  icon={<Search />}
                  className="w-1/2"
                />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg rounded-lg overflow-hidden w-full lg:w-auto">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-between p-4">
              <div>
                <CardTitle className="text-xl font-semibold">
                  Line Chart
                </CardTitle>
                <p className="text-sm text-gray-200">Trends over time</p>
              </div>
              <SlGraph />
            </CardHeader>
            <CardContent className="p-4">
              <canvas ref={lineChartRef}></canvas>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center mb-6 gap-10">
          <Card className="w-full sm:w-[350px]">
            <CardHeader>
              <CardTitle>Profits</CardTitle>
              <CardDescription>Monthly profit trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 justify-between">
                <Select>
                  <SelectTrigger>
                    <SelectValue>2021</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Year</SelectLabel>
                      <SelectItem>2021</SelectItem>
                      <SelectItem>2020</SelectItem>
                      <SelectItem>2019</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Input
                  type="text"
                  placeholder="Search"
                  icon={<Search />}
                  className="w-1/2"
                />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg rounded-lg overflow-hidden w-full lg:w-auto">
            <CardHeader className="bg-gradient-to-r from-green-500 to-teal-600 text-white flex items-center justify-between p-4">
              <div>
                <CardTitle className="text-xl font-semibold">
                  Bar Chart
                </CardTitle>
                <p className="text-sm text-gray-200">Comparative analysis</p>
              </div>

              <IoBarChartSharp />
            </CardHeader>
            <CardContent className="p-4">
              <canvas ref={barChartRef}></canvas>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center mb-6 gap-10 w-full">
          <Card className="w-full sm:w-[350px]">
            <CardHeader>
              <CardTitle>Orders</CardTitle>
              <CardDescription>Monthly order trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 justify-between">
                <Select>
                  <SelectTrigger>
                    <SelectValue>2021</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Year</SelectLabel>
                      <SelectItem>2021</SelectItem>
                      <SelectItem>2020</SelectItem>
                      <SelectItem>2019</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Input
                  type="text"
                  placeholder="Search"
                  icon={<Search />}
                  className="w-1/2"
                />
              </div>
              <div className="flex items-center gap-2 justify-between mt-4">
                <label className="text-sm text-gray-600">Month</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue>Month</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Month</SelectLabel>
                      <SelectItem>January</SelectItem>
                      <SelectItem>February</SelectItem>
                      <SelectItem>March</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Input
                  type="text"
                  placeholder="Search"
                  icon={<Search />}
                  className="w-1/2"
                />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg rounded-lg overflow-hidden w-full lg:w-auto">
            <CardHeader className="bg-gradient-to-r from-red-500 to-pink-600 text-white flex items-center justify-between p-4">
              <div>
                <CardTitle className="text-xl font-semibold">
                  Pie Chart
                </CardTitle>
                <p className="text-sm text-gray-200">Proportional data</p>
              </div>
              <FaChartPie />
            </CardHeader>
            <CardContent className="flex items-center justify-center h-96 p-4">
              <canvas ref={pieChartRef}></canvas>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Charts;
