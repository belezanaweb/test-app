export const formatCurrency = (value: number) => {
    if (value) {
        return `R$ ${String(value).replace(".", ",")}`;
    } else {
        return value;
    }
};