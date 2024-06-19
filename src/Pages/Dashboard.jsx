import { CreditCard, ShoppingCart, Truck, Users2 } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Header from "@/components/Dashboard-Components/Header";

export default function Dashboard() {
  return (
    <div className="flex max-h-screen w-full flex-col bg-muted/40">
      <Header />
      <div className="flex flex-col sm:flex-row">
        <main className="flex-1 space-y-4 p-4 sm:p-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Subscriptions
                </CardTitle>
                <Users2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">
                  +19% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Now
                </CardTitle>
                <Truck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">
                  +201 since last hour
                </p>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
              <CardDescription>You made 265 sales this month.</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <Tabs defaultValue="overview" className="space-y-2">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-medium leading-none">
                        $12,500.00
                      </p>
                      <p className="text-xs text-muted-foreground">
                        +12.1% from last month
                      </p>
                    </div>
                    <Progress value={70} className="h-3 w-full" />
                  </div>
                </TabsContent>
                <TabsContent value="analytics">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-medium leading-none">
                        $5,432.00
                      </p>
                      <p className="text-xs text-muted-foreground">
                        +8.9% from last month
                      </p>
                    </div>
                    <Progress value={50} className="h-3 w-full" />
                  </div>
                </TabsContent>
                <TabsContent value="details">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-medium leading-none">
                        $2,345.00
                      </p>
                      <p className="text-xs text-muted-foreground">
                        +4.7% from last month
                      </p>
                    </div>
                    <Progress value={30} className="h-3 w-full" />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Orders</CardTitle>
                <CardDescription>Your recent orders.</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>ORD-001</TableCell>
                      <TableCell>Shipped</TableCell>
                      <TableCell>$1,200.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Customers</CardTitle>
                <CardDescription>Your latest customers.</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Jane Doe</TableCell>
                      <TableCell>jane@example.com</TableCell>
                      <TableCell>(123) 456-7890</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
