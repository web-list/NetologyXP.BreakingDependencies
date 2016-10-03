function uniqueEntries(entries) {
    var entriesToAdd = [];
    var transactionBundle = getTransactionBundle();

    for (var i = 0; i < entries.length; i++){
        var entry = entries[i];
        if (transactionBundle.getListManager().hasEntry(entry)) {
            var entry = entries[i];
            entriesToAdd.add(entry);
        }
    }

    return entriesToAdd;
}

function handleTransaction(entries){
    var transactionBundle = getTransactionBundle();
    var entriesToAdd = uniqueEntries(entries);
    for (var i = 0; i < entriesToAdd.length; i++) {
        var entry = entriesToAdd[i];
        postData(entry);
    }

    transactionBundle.getListManager().add(entriesToAdd);
}