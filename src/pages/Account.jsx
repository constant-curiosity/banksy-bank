import {
  Card,
  Title,
  Text,
  Flex,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  Badge,
  Button,
} from "@tremor/react";

const transactions = [
  {
    transactionID: "#6789012",
    user: "Phlipp Forest",
    item: "On Clouds Shoes",
    amount: "$ 290.90",
    link: "#",
  },
  {
    transactionID: "#78901234",
    user: "Mara Pacemaker",
    item: "Ortovox Backpack 40l",
    amount: "$ 150.00",
    link: "#",
  },
  {
    transactionID: "#89012345",
    user: "Sev Major",
    item: "Oakley Jawbreaker",
    amount: "$ 190.90",
    link: "#",
  },
  {
    transactionID: "#78901234",
    user: "Mara Pacemaker",
    item: "Ortovox Backpack 40l",
    amount: "$ 150.00",
    link: "#",
  },
  {
    transactionID: "#78901234",
    user: "Mara Pacemaker",
    item: "Ortovox Backpack 40l",
    amount: "$ 150.00",
    link: "#",
  },
  {
    transactionID: "#78901234",
    user: "Mara Pacemaker",
    item: "Ortovox Backpack 40l",
    amount: "$ 150.00",
    link: "#",
  },
];

export default function Account() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center items-center border-2 border-gray-500 my-4 mx-4 relative w-full overflow-hidden rounded-3xl sm:px-12 lg:max-w-[60rem] ">
        <Card className="items-center mt-11 mb-11">
          <Flex justifyContent="start" className="space-x-2">
            <Title>Purchases</Title>
            <Badge color="gray">{transactions.length}</Badge>
          </Flex>
          <Text className="mt-2">Overview of this month's purchases</Text>

          <Table className="mt-6">
            <TableHead>
              <TableRow>
                <TableHeaderCell>Transaction ID</TableHeaderCell>
                <TableHeaderCell>User</TableHeaderCell>
                <TableHeaderCell>Item</TableHeaderCell>
                <TableHeaderCell className="text-right">Amount</TableHeaderCell>
                <TableHeaderCell>Link</TableHeaderCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {transactions.map((item) => (
                <TableRow key={item.transactionID}>
                  <TableCell>{item.transactionID}</TableCell>
                  <TableCell>{item.user}</TableCell>
                  <TableCell>{item.item}</TableCell>
                  <TableCell className="text-right">{item.amount}</TableCell>
                  <TableCell>
                    <Button size="xs" variant="secondary" color="gray">
                      See details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}
