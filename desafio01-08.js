const user = {
    name: 'Maria',
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {
    user.transactions.push(transaction)

    calculateBalance(user, transaction.type, transaction.value)

}

function calculateBalance(user, type, value) {
    if (type === 'credit') {
        user.balance -= value
    } else if (type === 'debit') {
        user.balance += value
    }
}

function getHigherTransactionByType(type) {
    let heigherTransaction
    let heigherValue = 0

    for (let transaction of user.transactions) {
        if (transaction.type === type && transaction.value > heigherValue) {
            heigherValue = transaction.value
            heigherTransaction = transaction
        }
    }

    return heigherTransaction
}

function getAverageTransactionValue() {
    let sum = 0;
    

    for (let transaction of user.transactions) {
        sum += transaction.value
    }

    const average = sum / user.transactions.length

    console.log(average)
}

function getTransactionCount() {
    let countDebit = 0,
        countCredit = 0,
        transactionCount

    for (let transaction of user.transactions) {
        if (transaction.type == 'debit') {
            countDebit++
        } else {
            countCredit ++
        }
    }

    transactionCount = {
        credit: countCredit, 
        debit: countDebit
    }

    console.log(transactionCount)
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))

getAverageTransactionValue()

getTransactionCount()