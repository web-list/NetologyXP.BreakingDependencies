function handleTransaction(entries){
    var transactionBundle = getTransactionBundle();

    for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        postData(entry);
    }

    transactionBundle.getListManager().add(entry);
}