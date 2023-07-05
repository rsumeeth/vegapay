import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Button from "@mui/material/Button";
import CustomerDetailsModal from "./CustomerModal";

export default function Kit() {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const searchText = useSelector((state) => state.kitSlice.searchResult);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCustomer(null);
  };

  const handleViewClick = (customer) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  useEffect(() => {
    fetchData();
  }, [searchText]);

  const fetchData = () => {
    const searchData = {
      value: searchText,
      page: 0,
      pageSize: 100,
    };

    axios
      .post("https://prod-api.vegapay.tech/forex/account/search", searchData, {
        headers: {
          Authorization:
            "Bearer eyJraWQiOiJnWlwvclBnV1RLVjBWbUFpWW52WVwvbUNaZUdxNXpHVVJDUWlpU0FUaHZyVjQ9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI2NDJlMTNjYS0yMmYzLTQ4ZjktYWMzMS02ZWE2ZGYzY2YwZDkiLCJldmVudF9pZCI6IjgyNGVmMzBiLWE3MjQtNDFiNi1hZjI5LWEyYzAzNGNlODE5NSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2ODgzODM1NDcsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfQlFqQWVQbWVkIiwiZXhwIjoxNjg4NTYzODcxLCJpYXQiOjE2ODg0Nzc0NzEsImp0aSI6IjkxZTkxYmI0LThkMTgtNDk3Ny1iOThkLTU3NTAzMTg4ODFiNiIsImNsaWVudF9pZCI6IjdqOWJyOTIxYWZmMGNzcHNlNnBqaGMydnA3IiwidXNlcm5hbWUiOiI2NDJlMTNjYS0yMmYzLTQ4ZjktYWMzMS02ZWE2ZGYzY2YwZDkifQ.ex6urzex-jxHYf4o0OVrZmE-7eaFP-yV5PMzpGdqmECLvQOsFSf3JYX8vySvE1UtmIx4j7G5kFPOtcrDBOJnZk7CXscQtUCf7VGAFsx8LifarM2eA5-1GoISPjUtaaF2tbU2cvsKTB_lcUJw-Koh3jbTMo_oiZuzn-2ZtT3sZ9ok99uN28k5DPduf3m_J-GnsAtuuq-ns3jCtznxOfDoaVNctmqerwz-yOIhyQWjHnF9WH6yzhcZnoM09dJBv43uIZzE7utMDfzP2Et_MGUohfQspsD1xSZa3fvnEe4RBAHkeUfVaIgDXN985YmVqdPp_fWv3rywz1R8wiydUzcVmA",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setCustomers(response.data.records);
        console.log(
          response.data.records.filter((item) => item.account != null)
        );
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <TableContainer component={Paper}>
      <CustomerDetailsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        customerName={
          selectedCustomer ? selectedCustomer.customer.fullName : ""
        }
        customerPlatformName={
          selectedCustomer ? selectedCustomer.platformName : ""
        }
        customerTeam={selectedCustomer ? selectedCustomer.team : ""}
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Customer Name</TableCell>
            <TableCell>Card Number</TableCell>
            <TableCell>Email ID</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Card Network</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.customer.id}>
              <TableCell>{customer.customer.fullName}</TableCell>
              {customer.card ? (
                <TableCell>{customer.card.cardNumber}</TableCell>
              ) : (
                <TableCell>-</TableCell>
              )}
              <TableCell>{customer.customer.emailId}</TableCell>
              <TableCell>{customer.customer.mobileNumber}</TableCell>
              <TableCell>{customer.mobileNumber}</TableCell>

              <TableCell>
                {customer.account != null ? (
                  <Button
                    variant="contained"
                    onClick={() => {
                      handleViewClick(customer);
                    }}
                  >
                    View
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "orange" }}
                    onClick={() => {
                      handleViewClick(customer);
                    }}
                  >
                    Create Account
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
