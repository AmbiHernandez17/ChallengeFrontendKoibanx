import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import Container from "react-bootstrap/Container";
import Pagination from "react-bootstrap/Pagination";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [active, setActive] = useState(null);
  const [orderBy, setOrderBy] = useState(null);

  const ROWS_PER_PAGE = 10;

  useEffect(() => {
    const getData = async () => {
      try {
        const url = `https://api.koibanx.com/stores?${
          active !== null ? `q={"active":${active}}&` : ""
        }${
          input !== "" ? `filter=${input}&sort=_id&sort=name&sort=CUIT&` : ""
        }h={"$max"=${ROWS_PER_PAGE}${
          page !== 1 ? `,"$skip"=${(page - 1) * ROWS_PER_PAGE}` : ""
        }${
          orderBy !== null
            ? orderBy === true
              ? `,"$orderby":{"name":1}`
              : `,"$orderby":{"CUIT":1}`
            : ""
        }}`;
        //const apiDataJson = await fetch(url);
        //const apiData = JSON.parse(apiDataJson);
        //setData(apiData);
        console.log(url);
        setData(null);
      } catch (error) {
        console.log(error);
      }
    };
    const timer = setTimeout(() => {
      getData();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [input, page, active, orderBy]);

  return (
    <div className="App">
      <Container>
        <SearchBar input={input} setInput={setInput} />
        <div className="d-flex my-3">
          <h1>Filtrar por:</h1>{" "}
          <Button
            onClick={() => {
              active === false ? setActive(null) : setActive(!active);
            }}
            variant={active === null ? "secondary" : "primary"}
            className="p-1 ms-2"
          >
            {active === true || active === null ? "activos" : "no activos"}
          </Button>
        </div>
        <div className="d-flex my-3">
          <h1>Ordenar por:</h1>{" "}
          <Button
            onClick={() => {
              orderBy === false ? setOrderBy(null) : setOrderBy(!orderBy);
            }}
            variant={orderBy === null ? "secondary" : "primary"}
            className="p-1 ms-2"
          >
            {orderBy === true || orderBy === null ? "Comercios" : "CUIT"}
          </Button>
        </div>
        <Table data={data} />
        <Pagination className="d-flex justify-content-center mt-4">
          <Pagination.First
            onClick={() => {
              setPage(1);
            }}
          />
          <Pagination.Prev
            onClick={() => {
              page > 1 ? setPage(page - 1) : setPage(1);
            }}
          />
          <Pagination.Item>{page}</Pagination.Item> {/* seria data.page */}
          <Pagination.Next
            onClick={() => {
              setPage(page + 1);
            }}
          />
          <Pagination.Last
            onClick={() => {
              setPage(1000000); /* seria data.pages */
            }}
          />
        </Pagination>
      </Container>
    </div>
  );
}

export default App;
