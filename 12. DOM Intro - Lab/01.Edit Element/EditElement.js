function editElement(reference, searchValue, replaceValue) {
    while (reference.textContent.includes(searchValue)) {
        reference.textContent = reference.textContent.replace(
            searchValue,
            replaceValue
        );
    }
}
