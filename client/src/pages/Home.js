import React from 'react'
import { useState, useEffect } from 'react'
import TransactionForm from '../components/TransactionForm'
import TransactionsList from '../components/TransactionsList'
import Container from '@mui/material/Container';

function Home() {

    const [transactions, setTransactions] = useState([]);
    const [editTransaction, setEditTransaction] = useState({});

    useEffect(() => {
        fetchTransctions()
    }, [])

    async function fetchTransctions() {
        const res = await fetch("http://localhost:4000/transaction");
        const { data } = await res.json();
        setTransactions(data);
    }

    return (
        <Container>
            <TransactionForm
                fetchTransctions={fetchTransctions}
                editTransaction={editTransaction}
            />

            <TransactionsList
                transactions={transactions}
                fetchTransctions={fetchTransctions}
                setEditTransaction={setEditTransaction}
            />
        </Container>
    );
}

export default Home